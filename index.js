'use strict';

/**
 * Module dependencies.
 */
var util = require('util');
var tinycolor = require('microcolor');

// End of dependencies.


var Logger = module.exports = function (module, logInits, format) {
  // setup module path and formats
  this.module = module
    && module.filename
      .split('/')
      .slice(-2)
      .join('/');
  this.format = format || [
    ':type ',
    '[:module]'.grey,
    ':message'
  ].join(' ');
  // bind log types to _log method
  this.info = this.log = Logger.prototype._log.bind(this, 'info ', 'log');
  this.error = exports.error = Logger.prototype._log.bind(this, 'error', null);
  this.debug = exports.debug = Logger.prototype._log.bind(this, 'debug', null);
  // log inits if it's not disabled
  if (logInits !== false) { this._log('init ', 'log'); }
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
  'test' !== process.env.NODE_ENV && util[method](formatedMessage);
  return message;
};



module.exports = function (module, logInits, format) {
  return new Logger(module, logInits, format);
};
