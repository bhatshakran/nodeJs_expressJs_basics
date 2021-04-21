const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Home Page');
});

app.get('/about', (req, res) => {
	res.send('About Page');
});

app.all('*', (req, res) => {
	res.status(404).send('<h1> Resource not found</h1>');
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000');
});

// methods on express app

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
