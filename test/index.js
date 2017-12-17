var path = require('path');
process.chdir(path.dirname(__filename));
var tap = require('agraddy.test.tap')(__filename);

var mod = require('../');

tap.assert.deepEqual(mod.cents, mod.cent, 'cent be an alias.');
tap.assert.deepEqual(mod.dollars, mod.dollar, 'dollar be an alias.');
tap.assert.deepEqual(mod.int, mod.integer, 'integer be an alias.');

tap.assert.equal(mod.cents(1), 100, 'Should multiply by 100.');
tap.assert.equal(mod.cents('1.00'), 100, 'Should multiply by 100.');
tap.assert.equal(mod.cents('1,000,000.00'), 100000000, 'Should handle commas.');
tap.assert.equal(mod.cents('') instanceof Error, true, 'Should create an error when not a valid number.');
tap.assert.equal(mod.cents('asdf') instanceof Error, true, 'Should create an error when not a valid number.');
tap.assert.equal(mod.cents('', mod.LOOSE), 0, 'Should handle loose coercion.');

tap.assert.equal(mod.int(1), 1, 'Should convert to integer.');
tap.assert.equal(mod.int('1.00'), 1, 'Should convert to integer.');
tap.assert.equal(mod.int('1,000,000.00'), 1000000, 'Should handle commas.');
tap.assert.equal(mod.int('') instanceof Error, true, 'Should create an error when not a valid number.');
tap.assert.equal(mod.int('asdf') instanceof Error, true, 'Should create an error when not a valid number.');

tap.assert.equal(mod.dollars(0), '0.00', 'Should move decimal two places to left.');
tap.assert.equal(mod.dollars(100), '1.00', 'Should move decimal two places to left.');
tap.assert.equal(mod.dollars(105), '1.05', 'Should move decimal two places to left.');
tap.assert.equal(mod.dollars(105.3), '1.05', 'Should move decimal two places to left.');
tap.assert.equal(mod.dollars('100'), '1.00', 'Should move decimal two places to left.');
tap.assert.equal(mod.dollars('1,000,000.00'), '10000.00', 'Should handle commas.');
tap.assert.equal(mod.dollars('100000000'), '1000000.00', 'Should move decimal two places to left.');
tap.assert.equal(mod.dollars('') instanceof Error, true, 'Should create an error when not a valid number.');
tap.assert.equal(mod.dollars('asdf') instanceof Error, true, 'Should create an error when not a valid number.');

