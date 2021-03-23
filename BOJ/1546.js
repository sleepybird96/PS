const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
	input.push(line);
	if (input.length === 2) {
		const scores = input[1].split(" ");
		const BEST_SCORE = Math.max(...scores);
		console.log(
			scores.reduce((acc, cur) => {
				if (cur === BEST_SCORE) {
					return acc + cur;
				} else {
					return acc + (cur / BEST_SCORE) * 100;
				}
			}, 0) / scores.length,
		);
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
