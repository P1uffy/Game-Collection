(function() {

    var iono = {};

    window.iono = iono;

    iono.ns = function(children) {
        var parts = children.split('.'),
            parent = iono,
            pl, i;

        if (parts[0] == 'iono') {
            parts = parts.slice(1);
        }

        pl = parts.length;
        for (i = 0; i < pl; i++) {
            //create a property if it doesnt exist
            if (typeof parent[parts[i]] == 'undefined') {
                parent[parts[i]] = {};
            }

            parent = parent[parts[i]];
        }

        return parent;
    };

    iono.require = function(ns) {
        var parts = ns.split('.'),
            parent = iono,
            pl, i;

        if (parts[0] == 'iono') {
            parts = parts.slice(1);
        }

        pl = parts.length;
        for (i = 0; i < pl; i++) {
            if (typeof parent[parts[i]] == 'undefined') {
                throw new Error ('Iono: Namespace "' + ns + '" not valid: "' +
                    parts[i] + '" does not exist.');
            }

            parent = parent[parts[i]];
        }

        return parent;
    };

    iono.inherits = function(child, parent) {
        child.prototype = Object.create(parent.prototype);
    };

    iono.prototype = function(classObject, proto) {
        for (var k in proto) {
            if (proto.hasOwnProperty(k)) {
                classObject.prototype[k] = proto[k];
            }
        }
    };

    iono.ns('game');
    iono.ns('core');

}());

(function() {

    var broadcaster = iono.ns('broadcaster'),
        subscriptions = {};

    broadcaster.subscribe = function(e, cb) {
        if (!subscriptions.hasOwnProperty(e)) {
            subscriptions[e] = [];
        }
        subscriptions[e].push(cb);
    };

    broadcaster.unsubscribe = function(e, cb) {
        if (!subscriptions.hasOwnProperty(e)) {
            return;
        }
        var se = subscriptions[e],
            i = se.indexOf(cb);

        if (i > -1) {
            se.splice(i, 1);
        }
    };

    broadcaster.publish = function(e) {
        if (!subscriptions.hasOwnProperty(e)) {
            return;
        }
        var se = subscriptions[e], i, l = se.length;
        for (i = 0; i < l; i += 1) {
            se[i].apply(null, arguments);
        }
    };
}());


(function() {
    var utilities = iono.ns('utilities');

    utilities.Pool = function Pool(constructor) {
        this.pool = [];
        this.constructor = constructor;
    };

    utilities.Pool.prototype = {
        get: function (options) {
            var p = this.pool,
                i;
            if (p.length) {
                i = p.splice(0, 1)[0];
            } else {
                i = new (this.constructor)(options);
            }
            return i;
        },
        release: function(instance) {
            if (!(instance instanceof this.constructor)) {
                throw new Error('Iono: Releasing wrong class in pool');
            }
            this.pool.push(instance);
        }
    };

}());


(function () {
    'use strict';

    iono.EventDispatcher = function EventDispatcher() {
        this.listeners = {};
    };

    iono.EventDispatcher.prototype.dispatch = function(e) {
        var lse = this.listeners[e.type], i, l, o;
        if (!lse) {
            return;
        }
        e.target = this;
        for (i = 0, l = lse.length; i < l; i += 1) {
            if (typeof lse[i][e.type + 'Handler'] === 'function') {
                lse[i][e.type + 'Handler'](e);
            } else {
                lse[i](e);
            }
        }
    };
    iono.EventDispatcher.prototype.on = function(e, target) {
        var ls = this.listeners;

        if (!ls.hasOwnProperty(e)) {
            ls[e] = [];
        }

        ls[e].push(target);
        return this;
    };
    iono.EventDispatcher.prototype.isListeningTo = function(e, target) {
        var ls = this.listeners;

        return ls.hasOwnProperty(e) && ls[e].indexOf(target) > -1;
    };
    iono.EventDispatcher.prototype.off = function(e, target) {
        var ls = this.listeners,
            lse = ls[e];

        if (!lse || lse.indexOf(target) === -1) {
            return;
        }

        lse.splice(lse.indexOf(target), 1);
        return this;
    };

}());

(function() {
    var core = iono.ns('core'),
        network = iono.ns('network');

    core.GameInitializer = function GameInitializer(manifest) {
        this.loader = null;
        this.manifest = manifest;
    };

    core.GameInitializer.prototype = {
        getLoader: function() {
            if (!!this.loader) {
                return this.loader;
            }
            this.loader = new network.LoaderManager(this.manifest);
            this.manifest = this.loader.getManifest();
            return this.loader;
        }
    };
}());

(function () {
    var dom = iono.ns('utilities.dom'),
        w = window,
        d = document;

    dom.create = function(type, attrs) {
        var el = d.createElement(type), k;
        if (!!attrs) {
            for (k in attrs) {
                if (attrs.hasOwnProperty(k)) {
                    if (k === 'innerHTML' || k === 'innerText') {
                        el[k] = attrs[k];
                    } else {
                        el.setAttribute(k, attrs[k]);
                    }
                }
            }
        }
        return el;
    };

    dom.on = function(e, cb) {
        w.addEventListener(e, cb);
    };

    dom.off = function(e, cb) {
        w.removeEventListener(e, cb);
    };

    dom.get = function(selector, el) {
        return (el || document).querySelector(selector);
    };

}());


(function() {
    var file = iono.ns('utilities.file');

    file.JS = 0;
    file.JSON = 1;
    file.CSS = 2;
    file.GLSL = 3;
    file.IMAGE = 4;
    file.SOUND = 5;
    file.HTML = 6;
    file.UNKNOWN = 9;
    file.MANIFEST;

    file.extension = function(url) {
        return (url + String()).toLowerCase().split('/')
                .pop().split('.').pop().split(/\#|\?/)[0];
    };

    file.type = function(url) {
        var extension = file.extension(url);

        switch (extension) {
            case 'html':
                if (url.indexOf('.glsl.html') > -1) {
                    return file.GLSL;
                }
                return file.HTML;
            case 'mp3':
            case 'ogg':
                return file.SOUND;
            case 'js':
                return file.JS;
            case 'json':
                if (url.indexOf('manifest.json') > -1) {
                    return file.MANIFEST;
                }
                return file.JSON;
            case 'jpeg':
            case 'jpg':
            case 'png':
            case 'gif':
                return file.IMAGE;
            case 'css':
                return file.CSS;
        };
        return file.UNKNOWN;
    };
}());

(function () {
    var network = iono.ns('network'),
        file = iono.ns('utilities.file');


    network.File = function File(opts) {
        this.id = null;
        this.url = null;
        this.type = null;
        this.response = null;

        // Sound related
        this.loop = false;
        this.volume = 1;

        if (!!opts) {
            for (var k in opts) {
                if (opts.hasOwnProperty(k) && this.hasOwnProperty(k)) {
                    this[k] = opts[k];
                }
            }
            if (!!this.url) {
                this.type = file.type(opts.url);
            }
        }
    };
}());

(function() {
    var network = iono.ns('network'),
        broadcaster = iono.ns('broadcaster'),
        file = iono.ns('utilities.file');

    network.LoaderManager = function LoaderManager(manifest) {
        if (typeof manifest === 'string' || typeof manifest === 'object') {
            manifest = new network.Manifest(manifest);
        }
        this.manifest = manifest;
        this.cache = {};
        this.currentTotal = 0;
        this.errors = 0;
    };

    network.LoaderManager.prototype = {
        parallel: 5,
        getManifest: function() {
            return this.manifest;
        },
        load: function() {
            this.next();
        },
        next: function() {
            var self = this;
            while (this.currentTotal < this.parallel && this.manifest.hasNext()) {
                this.currentTotal += 1;
                this.loadFile(this.manifest.next(), function(err, f, result) {
                    if (!err) {
                        f.response = result;
                    } else {
                        self.errors += 1;
                    }
                    self.currentTotal -= 1;
                    broadcaster.publish('loader.progress');

                    if (!err && f.type === file.MANIFEST) {
                        self.manifest.add(result);
                        self.next();
                    } else if (self.currentTotal === 0) {
                        if (!self.manifest.hasNext()) {
                            broadcaster.publish('loader.end');
                        } else {
                            self.next();
                        }
                    }
                });
            }
        },
        loadFile: function(f, callback) {
            var loader = this.getLoader(f);
            if (!!loader) {
                loader.load(callback);
            } else {
                console.warn('No loader found for ' + f.url);
                callback(true);
            }
        },
        getLoader: function(f) {
            switch (f.type) {
                case file.GLSL:
                    return new network.GLSLLoader(f);
                case file.HTML:
                    return new network.HTMLLoader(f);
                case file.JS:
                    return new network.JSLoader(f);
                case file.JSON:
                case file.MANIFEST:
                    return new network.JSONLoader(f);
                case file.IMAGE:
                    return new network.ImageLoader(f);
                case file.CSS:
                    return new network.CSSLoader(f);
                case file.SOUND:
                    return new network.SoundLoader(f);
            }
            return null;
        }
    };
}());

(function() {
    var network = iono.ns('network'),
        file = iono.ns('utilities.file');

    network.Manifest = function Manifest(manifest) {
        if (typeof manifest === 'string') {
            manifest = [{
                id: 'manifest',
                url: manifest,
                preload: true
            }];
        }

        this.manifest = [];
        this.preloading = [];
        if (!!manifest) {
            this.add(manifest);
        }
    };

    network.Manifest.prototype = {
        add: function(manifest) {
            var i, l = manifest.length, f;
            for (i = 0; i < l; i += 1) {
                f = new network.File(manifest[i]);
                this.manifest.push(f);
                if (manifest[i].preload !== false) {
                    this.preloading.push(f);
                }
            }
        },
        next: function() {
            if (this.preloading.length) {
                return this.preloading.splice(0, 1)[0];
            }
            return null;
        },
        hasNext: function() {
            return this.preloading.length > 0;
        },
        get: function(id) {
            var a = this.manifest, i, l = a.length;
            for (i = 0; i < l; i += 1) {
                if (a[i].id === id) {
                    return a[i].response;
                }
            }
            return null;
        },
        getByType: function(type) {
            var result = [],
                a = this.manifest, i, l = a.length;
            for (i = 0; i < l; i += 1) {
                if (a[i].type === type) {
                    result.push(a[i]);
                }
            }
            return result;
        }
    };
}());



(function() {
    var network = iono.ns('network'),
        dom = iono.ns('utilities.dom');

    network.CSSLoader = function CSSLoader(file) {
        if (!!file) {
            this.file = file;
            this.loader = new network.XHRLoader(file);
        }
    };

    network.CSSLoader.prototype = {
        load: function(callback) {
            var self = this;
            this.loader.load(function(err, response) {
                if (!!err) {
                    throw new Error('Error while loading file ' + self.file.url);
                } else {
                    var js = dom.create('style', {
                        type: 'text/css',
                        rel: 'stylesheet',
                        innerHTML: response
                    });
                    document.head.appendChild(js);
                }
                callback(err, self.file, response);
            });
        }
    };

}());



(function() {
    var network = iono.ns('network'),
        dom = iono.ns('utilities.dom');

    network.HTMLLoader = function HTMLLoader(file) {
        if (!!file) {
            this.file = file;
            this.loader = new network.XHRLoader(file);
        }
    };

    network.HTMLLoader.prototype = {
        load: function(callback) {
            var self = this;
            this.loader.load(function(err, response) {
                if (!!err) {
                    throw new Error('Error while loading file ' + self.file.url);
                } else {
                    var js = dom.create('div', {
                        class: 'hidden',
                        innerHTML: response
                    });
                    document.body.appendChild(js);
                }
                callback(err, self.file, response);
            });
        }
    };

}());



(function() {
    var network = iono.ns('network'),
        dom = iono.ns('utilities.dom');

    network.JSLoader = function JSLoader(file) {
        if (!!file) {
            this.file = file;
            this.loader = new network.XHRLoader(file);
        }
    };

    network.JSLoader.prototype = {
        load: function(callback) {
            var self = this;
            this.loader.load(function(err, response) {
                if (!!err) {
                    throw new Error('Error while loading file ' + self.file.url);
                } else {
                    var js = dom.create('script', {
                        type: 'text/javascript',
                        innerHTML: response
                    });
                    document.head.appendChild(js);
                }
                callback(err, self.file, response);
            });
        }
    };

}());



(function() {
    var network = iono.ns('network');

    network.JSONLoader = function JSONLoader(file) {
        if (!!file) {
            this.file = file;
            this.loader = new network.XHRLoader(file);
        }
    };

    network.JSONLoader.prototype = {
        load: function(callback) {
            var self = this;
            this.loader.load(function(err, response) {
                if (!!err) {
                    throw new Error('Error while loading file ' + self.file.url);
                } else {
                    try {
                        response = JSON.parse(response);
                    } catch (e) {
                        throw new Error('Unable to parse JSON response');
                    }
                }
                callback(err, self.file, response);
            });
        }
    };

}());



(function() {
    var network = iono.ns('network'),
        string = iono.ns('utilities.string');

    network.SoundLoader = function SoundLoader(file) {
        if (!!file) {
            this.file = file;
            this.loader = new network.XHRLoader(file);
        }
    };

    network.SoundLoader.prototype = {
        load: function(callback) {
            var self = this;
            this.loader.load(function(err, response) {
                if (!!err) {
                    throw new Error(string.format('Error while loading file "{0}".', self.file.url));
                }
                callback(err, self.file, response);
            });
        }
    };

}());


(function() {
    var network = iono.ns('network');

    network.XHRLoader = function XHRLoader(options) {
        this.url = null;
        this.xhr = null;
        this.inited = false;

        if (!!options) {
            if (!!options.url) {
                this.url = options.url;
                this.init();
            }
        }
    };
    network.XHRLoader.prototype = {
        method: 'GET',
        init: function() {
            if (this.inited) {
                return;
            }
            this.inited = true;

            var self = this,
                responded = false,
                xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (responded || xhr.readyState < 4) {
                    return;
                }

                if (xhr.status < 200 || xhr.status > 204) {
                    responded = true;
                    self.callback(true, xhr.responseText, xhr);
                } else if (xhr.readyState === 4) {
                    responded = true;
                    self.callback(false, xhr.responseText, xhr);
                }
            }

            this.xhr = xhr;
        },
        load: function(callback) {
            this.init();
            this.callback = callback;
            this.xhr.open(this.method, this.url);
            this.xhr.send();
        }
    };

}());
