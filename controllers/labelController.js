const db = require("../models");
const axios = require("axios");
const apikey = "&key=f1495819604b99d17226c7fa62037548";

// Defining methods for the LabelController
module.exports = {
  findAll: function(req, res) {
    const query = req.query.searchTerm;
    const queryURL =
      "http://api.brewerydb.com/v2/search?q=" +
      query +
      "&withBreweries=Y&type=beer&p=1&key=f1495819604b99d17226c7fa62037548";
    console.log("This is queryURL: ", queryURL);
    axios
      .get(queryURL)
      .then(response => {
        response = response.data.data;
        console.log('This is response: ', response);
        return response.filter(label => typeof label.labels !== 'undefined');
      })
      .then(labels => res.json(labels)) // labels.data.data
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Label.findById(req.params.id)
      .then(dbLabel => res.json(dbLabel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const Label = {
      _id: req.body._id,
      title: req.body.headline.main,
      url: req.body.web_url
    };
    db.Label.create(Label)
      .then(dbLabel => res.json(dbLabel))
      .catch(err => res.status(422).json(err));
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
