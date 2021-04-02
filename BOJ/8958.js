const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
	input.push(line);
	let result = "";
	if (input[0] && input.length >= +input[0] + 1) {
		input.shift();
		input.forEach((prob) => {
			let score = 1;
			result +=
				"\n" +
				prob.split("").reduce((sum, cur) => {
					if (cur === "O") {
						curScore = score;
						score++;
						return sum + curScore;
					} else {
						score = 1;
						return sum + 0;
					}
				}, 0);
		});
		console.log(result.slice(1));
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
