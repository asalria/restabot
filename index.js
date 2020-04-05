const zm = require('./zomato');

( async () => {

    await zm.initialize();

    await zm.search('dubai','downtown-dubai','sushi');


 //   await ig.likeTagsProcess(['jeepwrangler','ferrari','minijcw']);

    debugger;

})()