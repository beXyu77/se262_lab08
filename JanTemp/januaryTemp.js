// Include the nodejs File system into your program
const fs = require("fs");
var january = "48,42,68\n";
january += "48,42,69\n";
january += "49,42,69\n";
january += "49,42,61\n";
january += "49,42,65\n";
january += "49,42,62\n";
january += "49,42,62\n";

fs.writeFile("sfjanaverages.txt", january, (err, data) => {
    if (err) {
    console.log(err);
}
  //   console.log("file created");
});

fs.readFile("sfjanaverages.txt", (err, data) => {
    if (err) {
    console.log(err);
}

let file = data.toString().split("\n");
for (let i = 0; i < file.length - 1; i++) {
    console.log("Day" + (i + 1));
    let datas = file[i].split(",");
    console.log("Mean: " + datas[0]);
    console.log("Low: " + datas[1]);
    console.log("High: " + datas[2]);
    console.log("\n");
    }
});