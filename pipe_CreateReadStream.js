var http = require('http');

var fs = require('fs');

// in network tab you can see we are sending a huge sized file on the server which is not ok!

// http
// 	.createServer(function (req, res) {
// 		const text = fs.readFileSync('./content/big.txt', 'utf8');
// 		res.end(text);
// 	})
// 	.listen(5000);

// if we can read large files using createReadStream in chunks we can also
// send write large files in chunks by using fileSream.pipe method with
// create readStream
http
	.createServer(function (req, res) {
		const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
		fileStream.on('open', () => {
			fileStream.pipe(res);
		});

		fileStream.on('error', err => {
			res.end(err);
		});
	})
	.listen(5000);
