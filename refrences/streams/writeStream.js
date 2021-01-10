const fs = require("fs");

const writeStream = fs.createWriteStream("./demo.txt", "utf-8");
const readStream = fs.createReadStream("./notes.txt", "utf-8");

/* writing directly */
writeStream.write("Hello World\n");

/* writing from terminal */
process.stdin.on("data", (data) => {
	writeStream.write(data);
});
/* or */
// process.stdin.pipe(writeStream);

/* copy paste content from another file */
readStream.on("data", (data) => {
	writeStream.write(data);
});
/* or */
// readStream.pipe(writeStream);
