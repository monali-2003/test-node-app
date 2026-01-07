const fs = require("fs");
const path = require("path");
console.log(path.resolve("data.txt"));


const filepath = path.join(__dirname,"data.txt");
console.log("path:" , filepath);
fs.readFile("data.txt","utf8", (err,data) => {
if (err) {
console.log(err);
}
else {
console.log(data);
}
}
)
