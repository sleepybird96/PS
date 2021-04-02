const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
	input.push(+line);
	if (input[0] + 1 <= input.length) {
		const N = input[0];
		input.shift();
		const stack = [];
		const op = [];
		let cur = 1;
		let isTemp = false;

		for (let num of input) {
			while (cur <= num) {
				stack.push(cur);
				op.push("+");
				cur++;
			}
			if (stack[stack.length - 1] === num) {
				stack.pop();
				op.push("-");
			} else {
				isTemp = true;
			}
		}

		isTemp ? console.log("NO") : console.log(op.join("\n"));
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
