const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const labelSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  labels: Schema.Types.Mixed,
  abv: { type: String },
  brewery: { type: String, required: true },
  website: { type: String, required: true }
});

const Label = mongoose.model("Label", labelSchema);

module.exports = Label;
