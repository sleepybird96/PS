const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
	input.push(line);
	if (input.length === 2) {
		const x = input[0].split(" ")[1];
		console.log(
			input[1]
				.split(" ")
				.filter((n) => +n < +x)
				.join(" "),
		);
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
