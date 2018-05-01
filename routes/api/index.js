const router = require("express").Router();
const splashLabelRoutes = require("./splashLabels");
const labelRoutes = require("./labels");

// Label routes
router.use("/splashLabels", splashLabelRoutes);

router.use("/labels", labelRoutes);

module.exports = router;
