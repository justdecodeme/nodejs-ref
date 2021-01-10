const fs = require("fs");

/* sync */
const text = fs.renameSync("./demo.txt", "./demo-2.txt");

/* async */
fs.rename("./demo-2.txt", "./demo-1.txt", (err, text) => {
	if (err) {
		throw err;
	}

	console.log("File renamed!");
});
