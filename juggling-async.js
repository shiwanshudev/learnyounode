const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

const http = require("http");
function getData(count){
	if(count > 4) return;
	let output= "";
	http.get(process.argv[count], (res)=>{	
		res.setEncoding('utf-8');
		res.on('data', (data)=>{
			output+=data;
		});
	
		res.on('end',()=>{
			console.log(output);
			getData(count+1);
		})
	});
}


getData(2);
