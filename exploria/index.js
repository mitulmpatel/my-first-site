const express = require("express");
const mongoose = require("mongoose");
var methodOverride = require('method-override')

const app = express();
const port = 3000;

const mongoDB = "mongodb://localhost:27017/exploria";
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on('connected', function(){console.log("Connection successful");});

app.set("view engine", "pug");

app.use(express.static('public'));

app.use(methodOverride('_method'))

/* MongoClient.connect(url, function (err, client) {
    console.log("Connected successfully to MongoDB server");
}); */
/* 
app.get("/", (req, res) => {
    res.render("index", {});
}); 
*/

// Routers
const home = require('./src/home.js');
const properties = require('./src/properties.js');
const user = require('./src/user.js');

app.use('/', home);
app.use('/properties', properties);
app.use('/user', user);

/*app.post('/inquiry', urlencodedParser, function (req, res) {
    console.log('Got body:', req.body);
    //res.redirect(`/properties/${req.body.propertyid}`);
    res.redirect(`/properties`);
});*/

app.get("/about", (req, res) => {
    res.render("static/about", {});
});
app.get("/contact", (req, res) => {
    res.render("static/contact", {});
});


app.get('/error', function (req, res) {
    res.status(500).send('Server error');
});

// FOR 404 - Broken URLs
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(port, (err) => {
    if (err) {
        return console.log("something bad happened", err);
    }
    console.log(`Server running on port ${port}`);
});