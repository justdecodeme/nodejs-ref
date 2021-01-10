const fs = require("fs");

fs.appendFile("./notes.txt", "\nNew Text\n", (err) => {
	if (err) {
		throw err;
	}

	console.log("File saved!");
});
