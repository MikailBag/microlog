/* globals before, describe, it */
'use strict';

/**
 * Module dependencies.
 */
var log = process.env.MICROLOG_COV
  ? require('../index-cov')(module)
  : require('../index')(module);

// End of dependencies.


describe('Logger', function () {
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
  describe('NOLOG', function () {
    before(function () {
      process.env.NOLOG = true;
    });
    it('should not log info', function () {
      var message = 'info';
      var result = log.info(message);
      result.should.equal(false);
    });
    it('should log not error', function () {
      var message = 'error';
      var result = log.info(message);
      result.should.equal(false);
    });
    it('should log not debug', function () {
      var message = 'debug';
      var result = log.info(message);
      result.should.equal(false);
    });
  });
});


