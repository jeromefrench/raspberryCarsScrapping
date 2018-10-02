//	console.log(process.argv);
//console.log("lancement");


//console.log(process.argv[0]);
//console.log(process.argv[1]);
//console.log(process.argv[2]);
//console.log(process.argv[3]);

var valuemodel = process.argv[3].match(/[a-z0-9]+/i);
//console.log("le value model");
//console.log(typeof valuemodel);
//console.log(valuemodel[0]);



const puppeteer = require('/home/pi/Documents/webparsingcars/node_modules/puppeteer');

const getData = async () => {
	const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser', headless: true});
	const page = await browser.newPage();
	await Promise.all([
			page.goto('https://www.autotrader.co.uk/'),
			page.waitForNavigation({ waitUntil: 'networkidle2' }),
	]);
	await page.type('#postcode','HR68SB');
	// 3 - Récupérer les données
	const result = await page.evaluate(() => {
			let title = document.querySelector('#searchVehiclesMake').innerHTML
			return { title}
			})
	var str = result.title;
//	console.log( typeof str  );
//	console.log( str );
	var tab = str.match(/="(.*?)">/g);
//	console.log(tab);

	//      console.log(typeof tab)
	var tabbis = String(tab).match(/[A-Z\s]+/g);
//	console.log(tabbis);
//	console.log(tabbis[process.argv[2]-1]);
	await page.select('#searchVehiclesMake', tabbis[process.argv[2]-1]);

	// 3 - Récupérer les données
	await page.focus('body');
//console.log("1111111");
	await page.waitForSelector('#searchVehiclesModel');
//console.log("2222222");
	await page.waitFor(2000);



	await page.select('#searchVehiclesModel',valuemodel[0]);
//console.log("3333333333333");
//	await page.waitFor(2000);
//	await page.waitFor(2000);
await page.$eval( '#js-search-button', form => form.click() );
//	await page.waitFor(2000);
//	await Promise.all([
//await page.$eval( '#js-search-button', form => form.click() ),
//			page.click("#js-search-button"),
//			page.waitForNavigation({ waitUntil: 'networkidle2' }),
//	]);
	await page.waitForSelector('#main-content > div.js-search-results > ul');
	const resultbis = await page.evaluate(() => {
			var titlebis = document.querySelector('#main-content > div.js-search-results > ul').innerHTML;
			console.log (titlebis);
			return { titlebis}
			});
	console.log(resultbis.titlebis);
	//      console.log("TTTTTTTTTTTTTTTTTEEEEEEEEESSSSSSSSSSSSSSSSTTTTTTTTTTTTTT")
	// 4 - Retourner les données (et fermer le navigateur)
	browser.close()
		//      console.log("FIN")
}

// Appelle la fonction getData() et affichage les données retournées
getData();





