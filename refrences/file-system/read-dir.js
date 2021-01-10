const fs = require("fs");

/* sync */
const files = fs.readdirSync("./");
console.log(files);

/* async */
fs.readdir("./", (err, files) => {
	if (err) {
		throw err;
	}

	console.log(files);
});
