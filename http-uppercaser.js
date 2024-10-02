const http = require("http");

const server = http.createServer((req, res)=>{
	if(req.method === "POST"){
		let body="";
		req.on("data", (d)=>{
			body += d.toString().toUpperCase();
		});

		req.on("end", ()=>{
			res.end(body);	
		})
	}
});

server.listen(process.argv[2], ()=>{
	console.log("Server is running on port: " + process.argv[2]);
});
