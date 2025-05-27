const fs = require("fs");   // fs is short for file system
 
// fs.writeFile("new_message.txt", "Hello from Node.js", (err) => {
//     if (err) throw err
//     console.log("File created successfully"); 
// });

fs.readFile("new_message.txt", "utf-8", (err, data) => {
    if (err) throw err
    console.log(data);
});