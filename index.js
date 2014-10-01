
// instrument by jscoverage, do not modifly this file
(function (file, lines, conds, source) {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (BASE._$jscoverage) {
    BASE._$jscmd(file, 'init', lines, conds, source);
    return;
  }
  var cov = {};
  /**
   * jsc(file, 'init', lines, condtions)
   * jsc(file, 'line', lineNum)
   * jsc(file, 'cond', lineNum, expr, start, offset)
   */
  function jscmd(file, type, line, express, start, offset) {
    var storage;
    switch (type) {
      case 'init':
        if(cov[file]){
          storage = cov[file];
        } else {
          storage = [];
          for (var i = 0; i < line.length; i ++) {
            storage[line[i]] = 0;
          }
          var condition = express;
          var source = start;
          storage.condition = condition;
          storage.source = source;
        }
        cov[file] = storage;
        break;
      case 'line':
        storage = cov[file];
        storage[line] ++;
        break;
      case 'cond':
        storage = cov[file];
        storage.condition[line] ++;
        return express;
    }
  }

  BASE._$jscoverage = cov;
  BASE._$jscmd = jscmd;
  jscmd(file, 'init', lines, conds, source);
})('index.js', [1,6,7,12,33,41,58,14,19,25,26,27,29,43,44,47,51,52,53,42,59], {"14_16_6":0,"15_7_67":0,"19_16_6":0,"19_26_66":0,"29_6_8":0,"45_6_29":0,"46_6_2":0,"49_24_11":0,"51_11_6":0,"51_21_4":0,"52_2_31":0,"52_37_29":0,"52_13_20":0}, ["'use strict';","","/**"," * Module dependencies."," */","var util = require('util');","var tinycolor = require('microcolor');","","// End of dependencies.","","","var Logger = module.exports = function (module, logInits, format) {","  // setup module path and formats","  this.module = module","    && module.filename","      .split('/')","      .slice(-2)","      .join('/');","  this.format = format || [","    ':type ',","    '[:module]'.grey,","    ':message'","  ].join(' ');","  // bind log types to _log method","  this.info = this.log = Logger.prototype._log.bind(this, 'info ', 'log');","  this.error = exports.error = Logger.prototype._log.bind(this, 'error', null);","  this.debug = exports.debug = Logger.prototype._log.bind(this, 'debug', null);","  // log inits if it's not disabled","  if (logInits !== false) { this._log('init ', 'log'); }","};","","","Logger.prototype.theme = {","  init: 'grey',","  info: 'green',","  debug: 'yellow',","  error: 'red'","};","","","Logger.prototype._log = function (type, method) {","  if (process.env.NOLOG) { return false; }","  var args = Array.prototype.slice.call(arguments, 2);","  var message = args","    ? util.format.apply(null, args)","    : '';","  var formatedMessage = this.format","    .replace(':type', type[this.theme[type.replace(' ', '', 'g')]])","    .replace(':module', this.module || '')","    .replace(':message', message);","  method = method || type;","  'test' !== process.env.NODE_ENV && util[method](formatedMessage);","  return message;","};","","","","module.exports = function (module, logInits, format) {","  return new Logger(module, logInits, format);","};",""]);
_$jscmd("index.js", "line", 1);

"use strict";

_$jscmd("index.js", "line", 6);

/**
 * Module dependencies.
 */
var util = require("util");

_$jscmd("index.js", "line", 7);

var tinycolor = require("microcolor");

_$jscmd("index.js", "line", 12);

// End of dependencies.
var Logger = module.exports = function(module, logInits, format) {
    _$jscmd("index.js", "line", 14);
    // setup module path and formats
    this.module = _$jscmd("index.js", "cond", "14_16_6", module) && _$jscmd("index.js", "cond", "15_7_67", module.filename.split("/").slice(-2).join("/"));
    _$jscmd("index.js", "line", 19);
    this.format = _$jscmd("index.js", "cond", "19_16_6", format) || _$jscmd("index.js", "cond", "19_26_66", [ ":type ", "[:module]".grey, ":message" ].join(" "));
    _$jscmd("index.js", "line", 25);
    // bind log types to _log method
    this.info = this.log = Logger.prototype._log.bind(this, "info ", "log");
    _$jscmd("index.js", "line", 26);
    this.error = exports.error = Logger.prototype._log.bind(this, "error", null);
    _$jscmd("index.js", "line", 27);
    this.debug = exports.debug = Logger.prototype._log.bind(this, "debug", null);
    // log inits if it's not disabled
    if (_$jscmd("index.js", "cond", "29_6_8", logInits) !== false) {
        _$jscmd("index.js", "line", 29);
        this._log("init ", "log");
    }
};

_$jscmd("index.js", "line", 33);

Logger.prototype.theme = {
    init: "grey",
    info: "green",
    debug: "yellow",
    error: "red"
};

_$jscmd("index.js", "line", 41);

Logger.prototype._log = function(type, method) {
    if (process.env.NOLOG) {
        _$jscmd("index.js", "line", 42);
        return false;
    }
    _$jscmd("index.js", "line", 43);
    var args = Array.prototype.slice.call(arguments, 2);
    _$jscmd("index.js", "line", 44);
    var message = args ? _$jscmd("index.js", "cond", "45_6_29", util.format.apply(null, args)) : _$jscmd("index.js", "cond", "46_6_2", "");
    _$jscmd("index.js", "line", 47);
    var formatedMessage = this.format.replace(":type", type[this.theme[type.replace(" ", "", "g")]]).replace(":module", _$jscmd("index.js", "cond", "49_24_11", this.module) || "").replace(":message", message);
    _$jscmd("index.js", "line", 51);
    method = _$jscmd("index.js", "cond", "51_11_6", method) || _$jscmd("index.js", "cond", "51_21_4", type);
    _$jscmd("index.js", "line", 52);
    _$jscmd("index.js", "cond", "52_2_31", "test" !== _$jscmd("index.js", "cond", "52_13_20", process.env.NODE_ENV)) && _$jscmd("index.js", "cond", "52_37_29", util[method](formatedMessage));
    _$jscmd("index.js", "line", 53);
    return message;
};

_$jscmd("index.js", "line", 58);

module.exports = function(module, logInits, format) {
    _$jscmd("index.js", "line", 59);
    return new Logger(module, logInits, format);
};