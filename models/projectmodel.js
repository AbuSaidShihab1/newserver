const mongoose = require("mongoose");

const projectschema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  tag: [],
  link: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("project", projectschema);
