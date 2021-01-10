const fs = require("fs");

fs.writeFile("./notes2.txt", "utf-8", (err) => {
	if (err) {
		throw err;
	}

	console.log("File saved!");
});
