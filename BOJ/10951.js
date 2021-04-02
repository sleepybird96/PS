const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	console.log(
		input
			.map((nums) => {
				const [a, b] = nums.split(" ");
				return +a + +b;
			})
			.join("\n"),
	);
	process.exit();
});
