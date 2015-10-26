var fs = require('fs'); 
 
var content = fs.readFileSync(process.argv[2]); 
var nextLine = content.toString().split('\n').length - 1; 
console.log(nextLine) 
