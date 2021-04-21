const express = require('express');
const app = express();
const logger = require('./logger');

// to apply logger to all routes

app.use(logger);

// with logger in each route
// app.get('/', logger, (req, res) => {
// 	res.send('Home');
// });

app.get('/', (req, res) => {
	res.send('Home');
});

app.get('/about', (req, res) => {
	res.send('About Page');
});

app.get('/api/products', (req, res) => {
	res.send('Products Page');
});

app.get('/api/items', (req, res) => {
	res.send('Items Page');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000...');
});
