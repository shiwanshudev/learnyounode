const PORT = process.argv[2];
const http = require("http");
const url = require("url");

const server = http.createServer((req, res)=>{
	const parseUrl = url.parse(req.url);
	const t = parseUrl.query.split("=")[1];	
	const date = new Date(t);
	let data = null;
	if(parseUrl.pathname === "/api/parsetime"){
		res.writeHead(200, {
			"Content-Type": "application/json"
		});
		data = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		};
	}

	else if(parseUrl.pathname === "/api/unixtime"){
		res.writeHead(200, {
			"Content-Type": "application/json"
		});
		data = {
			unixtime : date.getTime()
		};
	}

	res.write(JSON.stringify(data));
	res.end();
});

server.listen(PORT,()=>{
	console.log("Server running on " + PORT);
});
