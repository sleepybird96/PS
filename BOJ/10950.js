const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
	input.push(line);
	if (input[0] && input.length > +input[0]) {
		input.shift();
		console.log(
			input
				.map((nums) => {
					const [a, b] = nums.split(" ");
					return +a + +b;
				})
				.join("\n"),
		);
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
