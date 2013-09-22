var lockFile = require('lockfile'),
    fs = require('fs'),
    url = require('url');

module.exports = {
  server: {
    options: {
      port: process.env.PORT || 8000,
      hostname: '0.0.0.0',
      base: 'tmp/public',
      // Use this option to have the catch-all return a different
      // page than index.html on any url not matching an asset.
      //   wildcard: 'not_index.html'
      middleware: middleware
    }
  },
  dist: {
    options: {
      port: process.env.PORT || 8000,
      hostname: '0.0.0.0',
      base: 'dist/',
      middleware: middleware
    }
  }
};

// works with tasks/locking.js
function lock(req, res, next) {
  (function retry() {
    if (lockFile.checkSync('tmp/connect.lock')) {
      setTimeout(retry, 30);
    } else {
      next();
    }
  }());
}

function wildcardResponseIsValid(request) {
  var urlSegments = request.url.split('.'),
      extension   = urlSegments[urlSegments.length-1];
  return (
    ['GET', 'HEAD'].indexOf(request.method.toUpperCase()) > -1 &&
    (urlSegments.length == 1 || extension.indexOf('htm') == 0 || extension.length > 5)
  )
}

function buildWildcardMiddleware(options) {
  return function(request, response, next) {
    if (!wildcardResponseIsValid(request)) { return next(); }

    var wildcard     = (options.wildcard || 'index.html'),
        wildcardPath = options.base + "/" + wildcard;

    fs.readFile(wildcardPath, function(err, data){
      if (err) { return next('ENOENT' == err.code ? null : err); }

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
  }
}

function isAppCacheRequest(request) {
  var segments = request.url.split('.'),
    extension = segments[segments.length - 1];

  return extension === 'appcache';
};

function buildAppCacheMiddleware(options) {
  return function(req, res, next) {
    if (!isAppCacheRequest(req)) return next();

    var file = (options.appcache || 'site.appcache'),
        filePath = options.base + "/" + file;

    fs.readFile(filePath, function(err, data){
      if (err) { return next('ENOENT' == err.code ? null : err); }

      response.writeHead(200, { 'Content-Type': 'text/cache-manifest' });
      response.end(data);
    });
  }
};

function middleware(connect, options) {
  return [
    lock,
    connect['static'](options.base),
    connect.directory(options.base),
    buildAppCacheMiddleware(options),
    // Remove this middleware to disable catch-all routing.
    buildWildcardMiddleware(options)
  ];
}
