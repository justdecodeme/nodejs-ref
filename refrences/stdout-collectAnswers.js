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
