const db = require("../models");

// Defining methods for the splashLabelController
module.exports = {
  findAll: function(req, res) {
    console.log('string');
    db.SplashLabel
      .find(req.query)
      .then(dbSplashLabel => res.json(dbSplashLabel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const splashLabel = {
      _id: req.body._id,
      title: req.body.headline.main,
      url: req.body.web_url
    };
    db.SplashLabel
      .create(splashLabel)
      .then(dbSplashLabel => res.json(dbSplashLabel))
      .catch(err => res.status(422).json(err));
  }
};
