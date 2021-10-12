// const Person = require('./person');

// const person1 = new Person('noman', 20);

// person1.greeting();

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => console.log('Called listener:', data));

// logger.log('Hello World');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// if (req.url === '/') {
	// 	fs.readFile(
	// 		path.join(__dirname, 'public', 'index.html'),
	// 		(err, content) => {
	// 			if (err) throw err;
	// 			res.writeHead(200, { 'Content-Type': 'text/html' });
	// 			res.end(content);
	// 		}
	// 	);
	// 	// res.writeHead(200, { 'Content-Type': 'text/html' });
	// 	// res.end('<h1>Homepage</h1>');
	// }
	// if (req.url === '/about') {
	// 	fs.readFile(
	// 		path.join(__dirname, 'public', 'about.html'),
	// 		(err, content) => {
	// 			if (err) throw err;
	// 			res.writeHead(200, { 'Content-Type': 'text/html' });
	// 			res.end(content);
	// 		}
	// 	);
	// 	// res.writeHead(200, { 'Content-Type': 'text/html' });
	// 	// res.end('<h1 >Homepage</h1>');
	// }

	// Build file path

	let filepath = path.join(
		__dirname,
		'public',
		req.url === '/' ? 'index.html' : req.url
	);

	// Extension of file path
	let extname = path.extname(filepath);

	// Inital Content Type
	let contentType = 'text/html';

	// Checkout ext and set content type
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;
	}

	// Read File
	fs.readFile(filepath, (err, content) => {
		if (err) {
			if (err.code == 'ENONET') {
				// page not found
				fs.readFile(
					path.join(__dirname, 'public'),
					(err, content) => {
						res.writeHead(200, {
							'Content-Type': 'text/html',
						});
						res.end(content, 'utf8');
					}
				);
			} else {
				// Some Serve errrr
				res.writeHead(500);
				res.end(`Server Error: ${err.code}`);
			}
		} else {
			//Success
			res.writeHead(200, {
				'Content-Type': contentType,
			});
			res.end(content, 'utf8');
		}
	});

	// if (req.url === '/api/users') {
	// 	const users = [
	// 		{ name: 'rahim', age: 11 },
	// 		{ name: 'shaheer', age: 23 },
	// 	];
	// 	res.writeHead(200, { 'Content-Type': 'application/json' });
	// 	res.end(JSON.stringify(users));
	// }
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
