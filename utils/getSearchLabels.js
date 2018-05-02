const axios = require("axios");
const mongoose = require("mongoose");
// const pageRandomizer = require('./pageRandomizer');
const apikey = "&key=f1495819604b99d17226c7fa62037548";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/beerlabels");

const db = require("../models");
// console.log("This is db: ", db);

function searchLabels() {
  let labelsArray = [];
  let page = 1;
  let queryURL =
    "http://api.brewerydb.com/v2/search?q=ale&withBreweries=Y&p=" +
    page +
    apikey;
  // console.log(queryURL);
  // axios.get(queryURL).then(function(response) {
  //   let page = pageRandomizer(response.data.numberOfPages);
  //   for (let i = 1; i < 11; i++) {
  //     page = pageRandomizer(response.data.numberOfPages);
  //     queryURL =
  //       "http://api.brewerydb.com/v2/search?q=ale&withBreweries=Y&p=" +
  //       page +
  //       apikey;
      axios.get(queryURL).then(function(beers) {
        // page = beers.data.currentPage;
        beers = beers.data.data;
        // console.log('This is BEERS: ', beers.name);
        // let breweries = beers.data.breweries.data;
        // console.log('This is response.data: ', response.data);
        // console.log("CURRENT PAGE: ", page);
        for (const beer of beers) {
          
          
          if (typeof(beer.labels) != "undefined" && beer.type == 'beer') {
            let brewery = beer.breweries[0];
            console.log('This is beer.type: \n', beer.type );
            db.Label.create({ brewery: brewery.name }, function(
              err,
              brewery
            ) {
              console.log("This is err: ", err);
            });
          }
        }
      });
    }



function pageRandomizer(pages) {
  if (pages > 2) {
    pages = pages - 1;
    let page = (Math.floor(Math.random() * pages) + 1);
    return page;
  } else {
    page = 1;
    return page;
  }
}

searchLabels();
