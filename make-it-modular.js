const filterFiles = require('./mymodule.js');
const path = process.argv[2];
const ext = process.argv[3];

filterFiles(path, ext, (err, data)=>{
	if(err) return console.log(err);
	for(d of data){
		console.log(d);
	}
})
