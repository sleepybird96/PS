const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const findMin = (arr) => arr.reduce((a, b) => Math.min(a, b));
const findMax = (arr) => arr.reduce((a, b) => Math.max(a, b));

const input = [];
rl.on("line", function (line) {
	input.push(line);
	if (input.length === 2) {
		const arr = input[1].split(" ");
		console.log(`${findMin(arr)} ${findMax(arr)}`);
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
