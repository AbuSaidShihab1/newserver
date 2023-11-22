const mongoose = require("mongoose");

const databaseconnect = () => {
  mongoose
    .connect(
      "mongodb+srv://shihabmoni15:pPgqufiunbm0LMvC@cluster0.j9cnnwu.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((res) => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = databaseconnect;
