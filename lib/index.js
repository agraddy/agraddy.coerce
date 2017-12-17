var mod = {};

mod.cents = function(input) {
	var output = input;

	if(output.replace) {
		output = input.replace(/,/g, '');
	}
	output = output * 100;

	if(isNaN(output)) {
		output = new Error('Input is not a coerceable to cents.');
	}

	return output;
}
mod.cent = mod.cents;

mod.dollars = function(input) {
	var output = input;

	output = Math.round(output);
	output = (output / 100).toFixed(2)

	if(isNaN(output)) {
		output = new Error('Input is not a coerceable to dollars.');
	}

	return output;
}
mod.dollar = mod.dollars;

mod.int = function(input) {
	var output = input;

	if(output.replace) {
		output = input.replace(/,/g, '');
	}
	output = Math.round(output);

	if(isNaN(output)) {
		output = new Error('Input is not coerceable to an integer.');
	}

	return output;
}


module.exports = mod;
