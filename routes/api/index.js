const router = require("express").Router();
const splashLabelRoutes = require("./splashLabels");
const labelRoutes = require("./labels");
const savedRoutes = require('./saved');

// Label routes
router.use("/splashLabels", splashLabelRoutes);

router.use("/labels", labelRoutes);

router.use('/saved', savedRoutes);

module.exports = router;
