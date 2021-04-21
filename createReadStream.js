const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
	highWaterMark: 80000,
	// can also pass encoding property
});

stream.on('data', result => {
	console.log(result);
});

// reading the big file  is done in chunks rather than altogether as in readFileSync , as we can see from the result
