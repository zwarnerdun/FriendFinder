var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/routing/apiRoutes.js", function(req, res) {
    res.sendFile(path.join(__dirname, "apiRoutes.js"));
});

app.get("/routing/htmlRoutes.js", function(req, res) {
    res.sendFile(path.join(__dirname, "htmlRoutes.js"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  