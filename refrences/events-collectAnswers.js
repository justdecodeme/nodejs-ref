const readline = require("readline");
const { EventEmitter } = require("events");

const questions = ["Your name? ", "Your native? "];

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const collectAnswers = (questions, done) => {
	const answers = [];
	const [firstQuestion] = questions;
	const emitter = new EventEmitter();

	const questionAnswered = (answer) => {
		emitter.emit("answer", answer);
		answers.push(answer);

		if (answers.length < questions.length) {
			rl.question(questions[answers.length], questionAnswered);
		} else {
			emitter.emit("complete", answers);
			done(answers);
		}
	};

	rl.question(firstQuestion, questionAnswered);
	return emitter;
};

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", (answer) => console.log(`question answered: ${answer}`));

answerEvents.on("complete", (answers) => {
	console.log("Thank you for your answers.");
	console.log(answers);
	process.exit();
});

answerEvents.on("complete", () => process.exit());
