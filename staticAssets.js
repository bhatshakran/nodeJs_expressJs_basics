const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
// express static is a built in middleware
app.use(express.static('./public'));

// this is also a static file and when moved to public is served  as root
// app.get('/', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, './navbar/index.html'));
//  adding to static assets
//  ssr
// });

app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000.....', __dirname);
});
