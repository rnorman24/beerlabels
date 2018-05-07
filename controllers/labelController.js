const db = require("../models");
const axios = require("axios");
const apikey = "&key=f1495819604b99d17226c7fa62037548";

// Defining methods for the LabelController
module.exports = {
  findAll: function(req, res) {
    const query = req.query.searchTerm;
    const queryURL = `http://api.brewerydb.com/v2/search?q=${query}&withBreweries=Y&type=beer&p=1${apikey}`;
    console.log("This is queryURL: ", queryURL);
    axios
      .get(queryURL)
      .then(response => {
        console.log(
          `This is response.data.numberOfPages: ${response.data.numberOfPages}`
        );
        response = response.data.data;

        return response.filter(label => typeof label.labels !== "undefined");
      })
      .then(labels => res.json(labels)) // labels.data.data
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Label.findById(req.params.id)
      .then(dbLabel => res.json(dbLabel))
      .catch(err => res.status(422).json(err));
  },

  findSaved: function(req, res) {
    console.log(`Hello!!!`)
    db.Label.find({})
      .then(dbLabel => res.json(dbLabel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
   
    const label = {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      labels: req.body.labels,
      brewery: req.body.breweries[0].name,
      website: req.body.breweries[0].website
    };
    console.log(
      'This is create label: ', label
    );
    db.Label.create(label)
      .then(dbLabel => res.json(dbLabel))
      .catch((err) => {
        console.log(`This is err: `, err) 
        res.status(422).json(err)
      });
  },
  update: function(req, res) {
    db.Label.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbLabel => res.json(dbLabel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Label.findById({ _id: req.params.id })
      .then(dbLabel => dbLabel.remove())
      .then(dbLabel => res.json(dbLabel))
      .catch(err => res.status(422).json(err));
  }
};
