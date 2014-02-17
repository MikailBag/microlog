'use strict';

require('colors');

var Logger = module.exports = function (module, logInits, format) {
  this.module = module && module.filename.split('/').slice(-2).join('/');
  this.message = format || ':time:'.grey + ' :type ' + '['.grey + ':module'.cyan +']'.grey;
  this.logInits = logInits || true;
  this.typeColors = {
    info: 'cyan',
    log: 'cyan',
    warn: 'yellow',
    error: 'red'
  };
};

Logger.prototype._log = function (type, args) {

  var message = this.message
    .replace(':time', new Date())
    .replace(':type', type[this.typeColors[type]])
    .replace(':module', this.module || '');

  message = [message];
  for (var key in arguments) { message.push(args[key]); }
  console[type].apply(null, message);
  return message;
};


Logger.prototype.info = exports.info = function() {
  return this._log('info', arguments);
};


Logger.prototype.log = exports.log = function() {
  return this._log('log', arguments);
};


Logger.prototype.error = exports.error = function() {
  return this._log('error', arguments);
};


Logger.prototype.warn = exports.debug = function() {
  return this._log('warn', arguments);
};