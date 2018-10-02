console.log(process.argv);

console.log("lancement");
console.log(process.argv[2]);



const puppeteer = require('/home/pi/Documents/webparsingcars/node_modules/puppeteer');

const getData = async () => {

 	const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser', headless: true});
  	const page = await browser.newPage();
 	//await page.goto('https://www.autotrader.co.uk/');


await Promise.all([
	              page.goto('https://www.autotrader.co.uk/'),
	              page.waitForNavigation({ waitUntil: 'networkidle0' }),
]);



	await page.type('#postcode','HR68SB');

//await page.waitForSelector('#postcode');
//await page.click('#postcode');

console.log("1212121212");
//  await page.goto('https://www.autotrader.co.uk/');
//
//  //      await page.waitForSelector('#js-more-options');
//  //      await page.click('#js-more-options');
//          //await page.waitFor(2000);
//                  //await page.waitFor(2000);
                  await page.waitForSelector('#searchVehiclesMake');

console.log("wwwwwwaw");

                          // 3 - Récupérer les données
                            const result = await page.evaluate(() => {
                                let title = document.querySelector('#searchVehiclesMake').innerHTML
                                    return { title}
                                      })











	var str = result.title;




console.log( typeof str  );
console.log( str );



console.log("AAAAAAAAAAAAAAAA");
	var tab = str.match(/="(.*?)">/g);
	console.log(tab);
//	console.log(typeof tab)

console.log("BBBBBBBBBBBBBBBBB");
	var tabbis = String(tab).match(/[A-Z\s]+/g);
	console.log(tabbis);
	console.log("CCCCCCCCCCCCCCCCCCCC");
	console.log(tabbis[process.argv[2]-1]);


await page.select('#searchVehiclesMake', tabbis[process.argv[2]-1]);

console.log('aller');

console.log('slt');

// 3 - Récupérer les données

//	await page.type('#postcode','HR68SB');

console.log("1313131313");
//await page.click('#js-known-search-advanced > div.known-search-container__quick-search-section > div.quick-search-section__dual-container.make-model-selectors > div.select-style.select-style--left.dropdown-image-dual-container.clear-selection > select');

await page.focus('body');

console.log("14141414141");
await page.waitForSelector('#searchVehiclesModel');
await page.waitFor(2000);
console.log("151515151");
	
  const resultbis = await page.evaluate(() => {
    var titlebis = document.querySelector('#searchVehiclesModel').textContent
  // console.log("AAAAAAAAAAAAAA");
	  return { titlebis}
 });

console.log("1616161616");
//	console.log("TTTTTTTTTTTTTTTTTEEEEEEEEESSSSSSSSSSSSSSSSTTTTTTTTTTTTTT")
console.log(resultbis.titlebis);
//	console.log("TTTTTTTTTTTTTTTTTEEEEEEEEESSSSSSSSSSSSSSSSTTTTTTTTTTTTTT")
  // 4 - Retourner les données (et fermer le navigateur)
browser.close()
//	console.log("FIN")
}

// Appelle la fonction getData() et affichage les données retournées
getData();



