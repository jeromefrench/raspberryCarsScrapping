

console.log("blancement");

const puppeteer = require('/home/pi/Documents/webparsingcars/node_modules/puppeteer');


//const puppeteer = require('puppeteer');

//(async () => {
const getData = async () => {

//	const browser = await puppeteer.launch({
  //   		headless: false,
    // 		args: ['--no-sandbox', '--disable-setuid-sandbox']
 //		 })

  const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser', headless: true});
  const page = await browser.newPage();
await Promise.all([
	      page.goto('https://www.autotrader.co.uk/'),
	      page.waitForNavigation({ waitUntil: 'networkidle0' }),
]);


//  await page.goto('https://www.autotrader.co.uk/');
	
//	await page.waitForSelector('#js-more-options');
//	await page.click('#js-more-options');
	//await page.waitFor(2000);
        //await page.waitFor(2000);
await page.waitForSelector('#searchVehiclesMake');



	// 3 - Récupérer les données
  const result = await page.evaluate(() => {
    let title = document.querySelector('#searchVehiclesMake').textContent
    return { title}
  })



  // 4 - Retourner les données (et fermer le navigateur)
  browser.close()
  return result
}

// Appelle la fonction getData() et affichage les données retournées
getData().then(value => {
  console.log(value)
})

