const db = require("../models");

// Defining methods for the LabelController
module.exports = {
  findAll: function(req, res) {
    db.Label
      .find(req.query)
      .sort({ date: -1 })
      .then(dbLabel => res.json(dbLabel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Label
      .findById(req.params.id)
      .then(dbLabel => res.json(dbLabel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const Label = {
      _id: req.body._id,
      title: req.body.headline.main,
      url: req.body.web_url
    };
    db.Label
      .create(Label)
      .then(dbLabel => res.json(dbLabel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Label
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbLabel => res.json(dbLabel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Label
      .findById({ _id: req.params.id })
      .then(dbLabel => dbLabel.remove())
      .then(dbLabel => res.json(dbLabel))
      .catch(err => res.status(422).json(err));
  }
};
