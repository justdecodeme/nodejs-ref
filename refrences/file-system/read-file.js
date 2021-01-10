const fs = require("fs");

/* sync */
const text = fs.readdirSync("../../notes.txt", "utf-8");
console.log(text);

/* async */
fs.readdir("../../notes.txt", "utf-8", (err, text) => {
	if (err) {
		throw err;
	}

	console.log(text);
});
