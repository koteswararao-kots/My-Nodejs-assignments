const fs  = require("fs");
fs.writeFile("index.html",`<h1>Hello World</h1>`, (err)=>{
    console.log(err);

})