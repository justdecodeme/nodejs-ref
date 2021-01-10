const fs = require("fs");

/* sync */
const text = fs.readFileSync("./notes.txt", "utf-8");
console.log(text);

/* async */
fs.readFile("./notes.txt", "utf-8", (err, text) => {
	if (err) {
		throw err;
	}

	console.log(text);
});
