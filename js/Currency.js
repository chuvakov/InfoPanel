//var fx = require('./../libs/money');

$(function () {
	$.getJSON(
		// NB: using Open Exchange Rates here, but you can use any source!
		'https://openexchangerates.org/api/latest.json?app_id=3cdd056ec1734a17af02d07491650b31',
		function (data) {
			// Check money.js has finished loading:
			if (typeof fx !== 'undefined' && fx.rates) {
				fx.rates = data.rates;
				fx.base = data.base;
				console.log(data.rates);
				console.log(data.base);
			} else {
				// If not, apply to fxSetup global:
				var fxSetup = {
					rates: data.rates,
					base: data.base,
				};
			}

			let dailyDollar = fx(1).from('USD').to('RUB');
			console.log(dailyDollar);
		}
	);

	//fx.base = 'USD';
	//let dailyDollar = fx(1).from('USD').to('RUR');
	//console.log(dailyDollar);
});
