// require the express module
const express = require('express');

// then create a express server
const app = express();
app.set('view engine', 'pug');

// FOR Serving static assets
app.use('/assets', express.static('public'));

/* // configure the default route and send a text as response
app.get('/', function (request, response) {
    // response.send('Hello Node.js World!');
    response.json({ name: 'Marta', age: '40'});
});

app.get('/products', function (req, res) {
    res.send('On this call we show a list of products');
});

app.post('/product/:id', function (req, res) {
    res.send('On this call we create a product');
});

app.put('/product/:id', function (req, res) {
    res.send('On this call we update a product');
});

app.delete('/product/:id', function (req, res) {
    res.send('On this call we delete a product');
}); */

const myMiddleware = function (req, res, next) {
    req.someValue = 'This is a value to test the Middleware';

    next();
}

app.use(myMiddleware);

// Routers
const home = require('./src/home.js');
const products = require('./src/products.js');

app.use('/', home);
app.use('/products', products);

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

// configure the port that express is going to listen to
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});