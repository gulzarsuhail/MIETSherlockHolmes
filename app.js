var express = require("express"),                       // include express module
    compression = require("compression"),               // compression for better performance
    expressSanitizer = require('express-sanitizer'),    // to sanitize user data;
    bodyParser = require('body-parser'),                // to parse the body elements
    midIndex = require("./middleware/index");

// initialize the app
var app = express();

// serve public directory with static paths
app.use(express.static(__dirname + "/public"));

// use the body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use the ejs module for views
app.set("view engine", "ejs");

// embed sanitize in all inbound data fields
app.use(expressSanitizer());

// use compression
app.use(compression());

// route the intro page
app.get("/", (req, res) => {
    midIndex.renderWithParams(req, res, "Welcome Sherlock Holmes", "intro")
});

// check if token is valid
app.post("/", midIndex.checkToken);

// route the participate
app.get("/participate", (req, res) => {
    midIndex.renderWithParams(req, res, "Participate - Shelock Holmes", "participate")
});

// route for participate post
app.post("/participate", midIndex.newParticipation);

// a participant got the key, give him/her clues
app.get("/key/longlivetheking", midIndex.sendCluePage);

// TEST LISTENER FOR LOCALHOST, DOES NOT NEED SUDO
app.listen(9001, function () {
    console.log("Let the games begin...");
});