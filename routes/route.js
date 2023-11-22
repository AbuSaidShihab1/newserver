const express = require("express");
const route = express();
const projectmodel = require("../models/projectmodel");
route.get("/", (req, res) => {
  try {
    res.send({
      success: true,
      message: "Hello Shihab",
    });
  } catch (err) {
    console.log(err);
  }
});

route.get("/project", async (req, res) => {
  try {
    const projectdata = await projectmodel.find();
    res.send({
      success: true,
      message: "Hello Shihab",
      projectdata,
    });
  } catch (err) {
    console.log(err);
  }
});
// project description
route.get("/project-desc/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const projectdata = await projectmodel.find({ _id: req.params.id });
    res.send({
      success: true,
      message: "Hello Shihab",
      projectdata,
    });
  } catch (err) {
    console.log(err);
  }
});

route.post("/project-upload", (req, res) => {
  try {
    const projectmodelinfo = new projectmodel({
      title: "hello",
      description: "ok",
      image: "sdasd",
      link: "ssdsd",
    });
    projectmodelinfo.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
