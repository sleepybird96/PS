const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
	input.push(line);
	if (input.length === 2) {
		console.log([...input[1]].reduce((sum, num) => +sum + +num));
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
