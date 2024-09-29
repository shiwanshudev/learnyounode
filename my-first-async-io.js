const fs = require("fs");
const pathName = process.argv[2];

if(pathName){
	fs.readFile(pathName, 'utf-8', (err, data)=>{
		const lines= data.split("\n").length - 1
		console.log(lines);
	})
}
