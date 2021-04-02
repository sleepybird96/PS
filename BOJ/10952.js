const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
	input.push(line);
	if (line === "0 0") {
		input.pop();
		console.log(
			input
				.map((numbers) => {
					const [a, b] = numbers.split(" ");
					return +a + +b;
				})
				.join("\n"),
		);
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
