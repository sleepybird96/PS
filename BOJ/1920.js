const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
	input.push(line);
	if (input.length === 4) {
		const [N, A, M, nums] = input;
		const arrA = new Set(A.split(" "));

		nums.split(" ").forEach((el) => {
			arrA.has(el) ? console.log(1) : console.log(0);
		});
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
