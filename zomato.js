const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const BASE_URL = 'https://zomato.com';
const TAG_URL = (emirate,address,query) => `https://www.zomato.com/${emirate}/${address}-restaurants?q=${query}`;
//https://www.zomato.com/dubai/downtown-dubai-restaurants?q=sushi

const restaurants = [];

const zomato = {
    browser: null,
    page: null,

    initialize: async() => {
        zomato.browser = await puppeteer.launch({
            headless: false
        });

        zomato.page = await zomato.browser.newPage();

        const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)' + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
        await zomato.page.setUserAgent(userAgent);


        
    },

    search: async(emirate,address,query) => {

        await zomato.page.goto(TAG_URL(emirate,address,query), { waitUntil: 'networkidle2'});
        await zomato.page.waitFor(5000);
        await zomato.page.waitForSelector('.search-snippet-card');
     //   let originalRestaurants = await zomato.page.type('//div[@class="search-snippet-card"]');
        let originalRestaurants = await zomato.page.evaluate(() => [...document.querySelectorAll('.search-snippet-card')]);
        let OR =  await zomato.page.evaluate(() => 
        Array.from(document.querySelectorAll('.search-snippet-card'), 
        e => e));
        debugger;
        let test = originalRestaurants[0].querySelector('a.result-title');
      //  let test = await zomato.page.evaluate((originalRestaurants) => originalRestaurants[0].querySelectorAll('a'));
       // console.log(test);


        debugger;

    }
// /*     login: async(username,password) => {




//      //   await zomato.page.waitForNavigation({ waitUntil: 'networkidle2' });

//         /* Writing username and password */


        

//         /* Select Log in button */

//         let loginButton = await zomato.page.$x('//div[contains(text(),"Log In")]');
        
//         await loginButton[0].click();

//         /* Wait for web to load */
//         await zomato.page.waitFor(2000);
//      /*   let notifButton = await zomato.page.$x('//button[contains(text(),"Not")]');
//         debugger;
//         await notifButton[0].click();
//      */  
        
//     },

//     likeTagsProcess  : async (tags = []) => {
//         for(let tag of tags){
//             await zomato.page.goto(TAG_URL(tag), { waitUntil: 'networkidle2' });
//             await zomato.page.waitFor(1000);

//             let posts = await zomato.page.$$('article > div:nth-child(3) img[decoding="auto"]')
        
//             for(let i=0; i<3; i++){
//                 let post = posts[i];

//                 /* Click on post */
//                 await post.click();

//                 await zomato.page.waitFor('span[id="react-root"][aria-hidden="true"]');
//                 await zomato.page.waitFor(1000);

//                 let likeButton = await post.$('span[aria-label="Like"]');

//                 debugger;

//                 if(likeButton){
//                     await likeButton.click();
//                 }

//                 /* Close it */
//                 let closeModalButton =  await zomato.page.$x('//button[contains(text(),"Close")]');
//                 await closeModalButton[0].click();

//                 await zomato.page.waitFor(1000);
               
//             }

//             await zomato.page.waitFor(60000);
//         }
//     } */
}

module.exports = zomato;