var path = require('path');
process.chdir(path.dirname(__filename));
var tap = require('agraddy.test.tap')(__filename);

var mod = require('../');

tap.assert.equal(mod.cents(1), 100, 'Should multiply by 100.');
tap.assert.equal(mod.cents('1.00'), 100, 'Should multiply by 100.');
// Currently does not work with period or space as seperator. If needed, open an issue. 
tap.assert.equal(mod.cents('1,000,000.00'), 100000000, 'Should handle commas.');
tap.assert.equal(mod.cents('asdf') instanceof Error, true, 'Should create an error when not a valid number.');

tap.assert.equal(mod.int(1), 1, 'Should convert to integer.');
tap.assert.equal(mod.int('1.00'), 1, 'Should convert to integer.');
// Currently does not work with period or space as seperator. If needed, open an issue. 
tap.assert.equal(mod.int('1,000,000.00'), 1000000, 'Should handle commas.');
tap.assert.equal(mod.int('asdf') instanceof Error, true, 'Should create an error when not a valid number.');

