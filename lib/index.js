var mod = {};

mod.STRICT = 'strict'
mod.Strict = 'strict'
mod.strict = 'strict'

mod.LOOSE = 'loose'
mod.Loose = 'loose'
mod.loose = 'loose'

mod.cents = function(input, type) {
	var output = input;

	if(type == 'loose') {
	} else {
		if(output == '') {
			output = NaN;
		}
	}

	if(output.replace) {
		output = output.replace(/,/g, '');
	}
	output = output * 100;

	if(isNaN(output)) {
		output = new Error('Input is not a coerceable to cents.');
	}

	return output;
}
mod.cent = mod.cents;

mod.dollars = function(input, type) {
	var output = input;

	if(type == 'loose') {
	} else {
		if(output == '') {
			output = NaN;
		}
	}

	if(output.replace) {
		output = output.replace(/,/g, '');
	}
	output = Math.round(output);
	output = (output / 100).toFixed(2)

	if(isNaN(output)) {
		output = new Error('Input is not a coerceable to dollars.');
	}

	return output;
}
mod.dollar = mod.dollars;

mod.int = function(input, type) {
	var output = input;

	if(type == 'loose') {
	} else {
		if(output == '') {
			output = NaN;
		}
	}

	if(output.replace) {
		output = output.replace(/,/g, '');
	}
	output = Math.round(output);

	if(isNaN(output)) {
		output = new Error('Input is not coerceable to an integer.');
	}

	return output;
}
mod.integer = mod.int;


module.exports = mod;
