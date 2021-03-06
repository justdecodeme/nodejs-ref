const readline = require("readline");

const questions = ["Your name? ", "Your native? "];

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const collectAnswers = (questions, done) => {
	const answers = [];
	const [firstQuestion] = questions;

	const questionAnswered = (answer) => {
		answers.push(answer);

		if (answers.length < questions.length) {
			rl.question(questions[answers.length], questionAnswered);
		} else {
			done(answers);
		}
	};

	rl.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, (answers) => {
	console.log("Thank you for your answers.");
	console.log(answers);
	process.exit();
});
