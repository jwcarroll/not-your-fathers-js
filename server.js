/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");

var app = express();
var compiler = webpack(config);

var serverPort = process.env.PORT || 3000;

app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use('/app', express.static('app'));
app.use('/assets/scripts', express.static('assets/scripts'));
app.use('/node_modules', express.static('node_modules'));

app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("/assets/styles/prism-tomorrow.css", function(req, res) {
  res.sendFile(path.join(__dirname, "/assets/styles/prism-tomorrow.1.3.0.css"));
});

app.get("/assets/scripts/prism.js", function(req, res) {
  res.sendFile(path.join(__dirname, "/assets/scripts/prism.js"));
});

app.get("/demo-typeahead.html", function(req, res) {
  res.sendFile(path.join(__dirname, "demo-typeahead.html"));
});

app.get("/demo-redux.html", function(req, res) {
  res.sendFile(path.join(__dirname, "demo-redux.html"));
});

app.get("/demo-trailing-letters.html", function(req, res) {
  res.sendFile(path.join(__dirname, "demo-trailing-letters.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(serverPort, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + serverPort);
});
