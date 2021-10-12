const fs = require('fs');
const path = require('path');

// Create Folder
// fs.mkdir(path.join(__dirname, './test'), {}, err => {
// 	if (err) throw err;
// 	console.log('Folder Created');
// });

// Create and write to file
// fs.writeFile(
// 	path.join(__dirname, './test', 'hello.txt'),
// 	'file written',
// 	err => {
// 		if (err) throw err;
// 		console.log('File written to');
// 	}
// );

//writing and appending

// fs.writeFile(
// 	path.join(__dirname, './test', 'hello.txt'),
// 	'file written! ',
// 	err => {
// 		if (err) throw err;
// 		console.log('File written to');

// 		fs.appendFile(
// 			path.join(__dirname, './test', 'hello.txt'),
// 			'I love Node.js',
// 			err => {
// 				if (err) throw err;
// 				console.log('File appended');
// 			}
// 		);
// 	}
// );

// reading a file
// fs.readFile(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	'utf-8',
// 	(err, data) => {
// 		console.log(data);
// 	}
// );

// rename a file
// fs.rename(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	path.join(__dirname, '/test', 'hello1.txt'),
// 	(err, data) => {
// 		console.log('file renamed');
// 	}
// );
