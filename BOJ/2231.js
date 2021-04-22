const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];

function divideSum(n) {
	let m = 0;

	for (let i = 1; i <= n; i++) {
		let nums = (i + "").split("");
		let sum = i + nums.reduce((sum, cur) => sum + +cur, 0);

		if (sum === n) {
			m = i;
			break;
		}
	}

	return m;
}

rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	const N = +input[0];

	let result = divideSum(N);

	console.log(result);

	process.exit();
});
