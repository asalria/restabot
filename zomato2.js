const playwright = require('playwright');

const BASE_URL = 'https://zomato.com';
const TAG_URL = (emirate,address,query) => `https://www.zomato.com/${emirate}/${address}-restaurants?q=${query}`;

const zomato2 = {

    browser: null,
    page: null,
    context: null,

initialize: async() => {

    zomato2.browser = await playwright['webkit'].launch({headless: false});
    zomato2.context = await zomato2.browser.newContext();
    zomato2.page = await zomato2.context.newPage();
   // await page.goto('https://www.zomato.com/');
    
  
},

search: async(emirate,address,query) => {

    await zomato2.page.goto(TAG_URL(emirate,address,query), { waitUntil: 'networkidle2'});
    await zomato2.page.waitFor(5000);
    await zomato2.page.waitForSelector('.search-snippet-card');
 //   let originalRestaurants = await zomato.page.type('//div[@class="search-snippet-card"]');
    let originalRestaurants = await zomato2.page.evaluate(() => [...document.querySelectorAll('.result-title')]);

    let ORR = await zomato2.page.$$('.result-title');

    let OR =  await zomato2.page.evaluate(() => 
    Array.from(document.querySelectorAll('.search-snippet-card'), 
    e => e));
    debugger;
    let test = originalRestaurants[0].querySelector('a.result-title');
  //  let test = await zomato.page.evaluate((originalRestaurants) => originalRestaurants[0].querySelectorAll('a'));
   // console.log(test);


    debugger;

}


};

module.exports = zomato2;