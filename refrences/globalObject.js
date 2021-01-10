/* run > node globalObject.js */
/* or */
/* run > node globalObject */

/* link: */
/* https://nodejs.org/api/globals.html */

/* global objects */
console.log("Hello World!"); // Hello World!
global.console.log("Hello World!"); // Hello World!
const util = require("util");
util.log("Hello World!"); // 10 Jan 17:50:05 - Hello World!

console.log(__dirname); // E:\Github\nodejs-ref
console.log(__filename); // E:\Github\nodejs-ref\globalObject.js

/* the require function */
const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`); // The file name is globalObject.js
const dirUploads = path.join(__dirname, "files", "uploads");
console.log(`Files will be uploading to ${dirUploads}`); // Files will be uploading to E:\Github\nodejs-ref\files\uploads

/* argument variables with process.env */
console.log(process.pid); // 14620
console.log(process.versions.node); // 12.16.0
console.log(process.argv); // [..., ..., ...]

const [, , firstName, lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`); // cmd: node globalObject rakko kumar | output: Your name is rakko kumar

const grab = (flag) => {
	let indexAfterFlag = process.argv.indexOf(flag) + 1;
	return process.argv[indexAfterFlag];
};
const greeting = grab("--greeting");
const user = grab("--user");
console.log(`${greeting} ${user}`); // cmd: node globalObject --user Rakko --greeting Hello | output: Hello Rakko

/* standard output */
process.stdout.write("  Hello\n");
process.stdout.write("    World\n");

/* standard input */
const questions = ["Your name", "Your native"];
const ask = (i = 0) => {
	process.stdout.write(`${questions[i]}`);
	process.stdout.write(` > `);
};
ask();
const answers = [];
process.stdin.on("data", (data) => {
	answers.push(data.toString().trim());
	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}
});
process.on("exit", () => {
	[_name, native] = answers;
	console.log(`${_name} is from ${native}.`);
});
