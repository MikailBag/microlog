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
  this._init(logInits);

};


Logger.prototype.theme = {
  init: 'grey',
  info: 'green',
  debug: 'yellow',
  error: 'red'
};


Logger.prototype._log = function (type, args, method) {
  if (process.env.NOLOG) { return false; }
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
  : this._log('init ', null, 'log');
};

Logger.prototype.info = Logger.prototype.log = exports.info = function() {
  return this._log('info ', arguments, 'log');
};


Logger.prototype.error = exports.error = function() {
  return this._log('error', arguments);
};


Logger.prototype.debug = exports.debug = function() {
  return this._log('debug', arguments, 'log');
};