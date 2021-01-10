const fs = require("fs");

if (fs.existsSync("temp-folder")) {
	console.log("Already there!");
} else {
	fs.mkdir("./temp-folder", (err) => {
		if (err) {
			throw err;
		}

		console.log("Directory created!");
	});
}
