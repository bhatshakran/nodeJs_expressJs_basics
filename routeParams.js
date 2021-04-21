const express = require('express');

const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
	const newProducts = products.map(product => {
		const { id, image, name } = product;
		return { id, name, image };
	});
	res.json(newProducts);
});

app.get('/api/products/:slug', (req, res) => {
	const { slug } = req.params;
	const singleProduct = products.find(product => {
		return product.id === Number(slug);
	});
	if (singleProduct === undefined) {
		return res.status(404).send('Product Does Not Exist');
	}
	res.json(singleProduct);
});

app.listen(5000, () => {
	console.log('server is listening on port 5000...');
});
