const mongoose = require("mongoose");
const config = require("../config");

const { connection } = config;
const userAuth = connection.user && connection.password ? `${connection.user}:${connection.password}@` : '';
const uri = `mongodb://${userAuth}${connection.host}:${connection.port}/${connection.dbName}`;
console.log("uri :", uri);

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database.");
  })
  .catch(err => {
    console.log("Unable to connect to database.", err);
  });

// mongoose.connection;