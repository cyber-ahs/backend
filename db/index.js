const mongoose = require("mongoose");

mongoose
  .connect(process.env.mongodb+srv://alihassam:Karachi123!@cluster0.fmhq2.mongodb.net/test)
  .then(() => {
    console.log("db is connected!");
  })
  .catch((ex) => {
    console.log("db connection failed: ", ex);
  });
