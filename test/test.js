/* globals describe, it */
'use strict';

/**
 * Module dependencies.
 */
var log = require('../')(module);
var assert = require('assert');

// End of dependencies.


describe('Loger', function () {
  it('should log info', function () {
    var message = 'info';
    var result = log.info(message);
    result.should.equal(message);
  });
  it('should log error', function () {
    var message = 'error';
    var result = log.info(message);
    result.should.equal(message);
  });
  it('should log debug', function () {
    var message = 'debug';
    var result = log.info(message);
    result.should.equal(message);
  });
});




log.info('info');
log.error('error');
log.debug('debug');
