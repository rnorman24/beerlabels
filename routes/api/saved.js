const router = require("express").Router();
const labelController = require("../../controllers/labelController");

// Matches with "/api/saved"
router.route("/")
  .get(labelController.findSaved)
  .post(labelController.create);

// Matches with "/api/saved/:id"
router
  .route("/:id")
  .get(labelController.findById)
  .put(labelController.update)
  .delete(labelController.remove);

module.exports = router;
