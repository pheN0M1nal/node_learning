const http = require('http');

// Create Server object

http.createServer((req, res) => {
	//Write Responce
	res.write('Hey!! Noman ...');
	res.end();
}).listen(5000, () => console.log('Server running ...'));
