const https = require('https');

https
	.createServer((req, res) => {
		res.writeHead(200);
		res.end('Hello!');
	})
	.listen(3000, function() {
});
		console.log(process.env.HELLO);
		require('dotenv').config();
		console.log(process.env.HELLO);
