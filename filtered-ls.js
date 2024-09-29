const path = process.argv[2];
const ext = process.argv[3];
const fs = require("fs");

fs.readdir(path, (err, list)=>{
	for(file of list){
		if(file.split(".")[1] === ext) console.log(file);
	}
});



