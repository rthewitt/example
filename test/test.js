var config = require('../config'),
    assert = require('assert'),
    util = require('util');

var main = require(util.format('../%s/%s', config.solutionDir, config.main));

describe(config.title, function() {

    describe('Default Return value', function() {
        it('should be do me solid', function() {
            assert.equal('done solid', main.doMeSolid());
        });
    });

    describe('Return value', function() {
        it('should contain argument name', function() {
            assert.equal('bob done solid', main.doMeSolid('bob'));
        });
    });

    describe('test configuration', function() {
        it('config has property something=whatever', function() {
            assert.strictEqual('whatever', main.something);
        });
    });

});
