'use strict'

let express = require('express');

let app = express();

app.get('/', (req, res) => {
	res.send('Hello');
});

app.listen(3000, () => {
	console.log('Node server listening on port 3000.');
});