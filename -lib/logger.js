'use strict';

/**
 * Module dependencies.
 */
var util = require('util');
var tinycolor = require('microcolor');

// End of dependencies.


var Logger = module.exports = function (module, logInits, format) {
  this.module = module && module.filename.split('/').slice(-2).join('/');
  this.format = format || [':type ', '[:module]'.grey, ':message'].join(' ');
  this.info = this.log = exports.info = Logger.prototype._log.bind(this, 'info ', 'log');
  this.error = exports.error = Logger.prototype._log.bind(this, 'error', null);
  this.debug = exports.debug = Logger.prototype._log.bind(this, 'debug', null);
  this._init(logInits);
};


Logger.prototype.theme = {
  init: 'grey',
  info: 'green',
  debug: 'yellow',
  error: 'red'
};


Logger.prototype._log = function (type, method) {
  if (process.env.NOLOG) { return false; }
  var args = Array.prototype.slice.call(arguments, 2);
  var message = args
    ? util.format.apply(null, args)
    : '';
  var formatedMessage = this.format
    .replace(':type', type[this.theme[type.replace(' ', '', 'g')]])
    .replace(':module', this.module || '')
    .replace(':message', message);
  method = method || type;
  util[method](formatedMessage);
  return message;
};


Logger.prototype._init = function (logInits) {
return logInits === false
  ? void 0
  : this._log('init ', 'log', null);
};