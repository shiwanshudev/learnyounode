const fs = require("fs");
const path = process.argv[2];

console.log(fs.readFileSync(path).toString().split("\n").length - 1);
