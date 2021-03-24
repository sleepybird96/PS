const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];

rl.on("line", function (line) {
	input.push(+line);
	const numCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	if (input.length === 3) {
		const acc = input[0] * input[1] * input[2];
		(acc + "").split("").forEach((num) => numCount[+num]++);
		numCount.forEach((count) => console.log(count));
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
