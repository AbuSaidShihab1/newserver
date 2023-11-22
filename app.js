const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 8080;
const colors = require("colors");
const morgan = require("morgan");
const route = require("./routes/route");
const databaseconnect = require("./db/database");
const cors = require("cors");
databaseconnect();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(route);
app.listen(port, function () {
  console.log(`My Project Run On ${port} Port`.bgCyan.black);
});
