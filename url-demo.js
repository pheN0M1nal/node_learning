const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=2086&status=active');

// Serialized URL
//console.log(myUrl.href);

// Host (root domain) plus port
// console.log(myUrl.host);

// Hostname (root domain)
// console.log(myUrl.hostname);

// Path name
// console.log(myUrl.pathname);

// Serialized Query
// console.log(myUrl.search);

// Params Object
// console.log(myUrl.searchParams);

// Add param // name=abc, 123=value
//myUrl.searchParams.append('abc', '123');
// console.log(myUrl.searchParams);

// Loop through Params
//myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
