// SplashLabel model
// ==============

// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the splashLabelSchema with our schema class
const splashLabelSchema = new Schema({
  // headline, a string, must be entered
  imageUrl: {
    type: String,
    required: true,
  }  
});

// Create the SplashLabel model using the splashLabelSchema
const SplashLabel = mongoose.model("SplashLabel", splashLabelSchema);

// Export the SplashLabel model
module.exports = SplashLabel;
