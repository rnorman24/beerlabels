const axios = require("axios");
const mongoose = require("mongoose");
const apikey = "&key=f1495819604b99d17226c7fa62037548";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/beerlabels");

const db = require("../models");

function searchLabels(page = 1) {
  let beers = [];
  let queryURL =
    "http://api.brewerydb.com/v2/search?q=ale&withBreweries=Y&type=beer&p=" +
    page +
    apikey;
  axios.get(queryURL).then(function(res) {
    // page = beers.data.currentPage;
    results = res.data.data;
   // console.log('This is results.data.data: ', results);
    for (const beer of results) {
      if (typeof beer.labels != "undefined") {
        // let brewery = beer.breweries[0];
        beers.push(beer);
      //   db.Label.create(
      //     {
      //       id: beer.id,
      //       name: beer.name,
      //       description: beer.description,
      //       labels: beer.labels.medium,
      //       brewery: brewery.name,
      //       website: brewery.website
      //     },
      //     function(err) {
      //       console.log("This is err: ", err);
      //     }
      //   );
      // }
    }
  }
}).then(console.log('This is beers: ', beers));
}


function pageRandomizer(pages) {
  if (pages > 2) {
    pages = pages - 1;
    let page = Math.floor(Math.random() * pages) + 1;
    return page;
  } else {
    page = 1;
    return page;
  }
}

searchLabels();
