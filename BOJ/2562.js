const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [0];

rl.on("line", function (line) {
	input.push(+line);
	if (input.length === 10) {
		const max = Math.max(...input);
		console.log(max);
		console.log(input.indexOf(max));
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
