const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];

function getWay(n) {
	let comb = 1;
	let count = 1;

	while (n > comb) {
		comb += count * 6;
		count++;
	}

	return count;
}

rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	const N = +input[0];

	let result = getWay(N);

	console.log(result);

	process.exit();
});
