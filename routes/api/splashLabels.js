const router = require("express").Router();
const splashLabelController = require("../../controllers/splashLabelController");

// Matches with "/api/splashLabel"
router
  .route("/")
  .get(splashLabelController.findAll);

module.exports = router;
