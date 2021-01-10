/* report progress with setInterval */
const waitTime = 3000;
const waitInterval = 10;
let currentTime = 0;
console.log("/--------------------------------/");
console.log(`/--- Setting a ${waitTime / 1000} second delay ---/`);
console.log("/--------------------------------/");

const incTime = () => {
	currentTime += waitInterval;
	const perc = Math.floor((currentTime / waitTime) * 100);
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`Progress ... ${perc}%`);
	// console.log(`waiting ${currentTime / 1000} seconds`);
};
const timerFinished = () => {
	clearInterval(interval);
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	console.log("Progress ... done");
};
const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
