const zm = require('./zomato');
const zm2 = require('./zomato2');

( async () => {

  //  await zm.initialize();

    await zm2.initialize();

  await zm2.search('dubai','downtown-dubai','sushi');


 //   await ig.likeTagsProcess(['jeepwrangler','ferrari','minijcw']);

    debugger;

})()