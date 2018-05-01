const router = require("express").Router();
const labelController = require("../../controllers/labelController");

// Matches with "/api/labels"
router.route("/")
  .get(labelController.findAll)
  .post(labelController.create);

// Matches with "/api/labels/:id"
router
  .route("/:id")
  .get(labelController.findById)
  .put(labelController.update)
  .delete(labelController.remove);

module.exports = router;
