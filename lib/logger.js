'use strict';

/**
 * Module dependencies.
 */
var util = require('util');

// End of dependencies.


var Logger = module.exports = function (module, logInits, format) {
  this.module = module && module.filename.split('/').slice(-2).join('/');
  this.format = format || ':type [:module] :message';
  this.logInits = logInits || true;
};


Logger.prototype._log = function (type, args) {
  var message = util.format.apply(null, args);
  var formatedMessage = this.format
    .replace(':type', type)
    .replace(':module', this.module || '')
    .replace(':message', message);

  util[type](formatedMessage);
  return message;
};


Logger.prototype.info = exports.info = function() {
  return this._log('log', arguments);
};


Logger.prototype.error = exports.error = function() {
  return this._log('error', arguments);
};


Logger.prototype.debug = exports.debug = function() {
  return this._log('debug', arguments);
};