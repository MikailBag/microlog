'use strict';

/**
 * Module dependencies.
 */
var util = require('util');
var colors = require('colors');

// End of dependencies.


var Logger = module.exports = function (module, logInits, format) {
  this.module = module && module.filename.split('/').slice(-2).join('/');
  this.format = format || [':type ', ':module'.grey, ':message'].join(' ');
  'undefined' === typeof logInits
    ? this.info('init')
    : logInits
      ? this.info('init')
      : void 0;
};


Logger.prototype.theme = {
  log: 'green',
  debug: 'yellow',
  error: 'red'
};


Logger.prototype._log = function (type, args) {
  var message = util.format.apply(null, args);
  var formatedMessage = this.format
    .replace(':type', type[this.theme[type]])
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
  return this._log('log', arguments);
};