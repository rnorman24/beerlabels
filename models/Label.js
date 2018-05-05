const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const labelSchema = new Schema({
  // _id: { type: Schema.Types.ObjectId, required: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  labels: { type: String, required: true },
  brewery: { type: String, required: true },
  website: { type: String, required: true }
  // date: { type: Date, default: Date.now }
});

// , { _id: false });

const Label = mongoose.model("Label", labelSchema);

module.exports = Label;

/*
const labelSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { _id: false });

const Label = mongoose.model("Label", articleSchema);

module.exports = Label;
*/