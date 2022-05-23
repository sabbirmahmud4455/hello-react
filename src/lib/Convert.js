function toCelsius(fahrenheit){
	return ((fahrenheit -32) * 5) / 9;
}

function toFahrenHeit(celsius){
	return (celsius * 9) / 5 + 32;
}

function convert(temperature, convertTo){
	const input = parseFloat(temperature);

	if (Number.isNaN(input)) {
		return '';
	}

	const output = convertTo(input);
	const rounded = Math.round(output * 1000) / 1000;

	return rounded.toString();
}

module.exports = {
	convert,
	toCelsius, 
	toFahrenHeit,
}