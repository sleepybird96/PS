const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
	input.push(line);
	if (input[0] && +input[0] + 1 <= input.length) {
		input.shift();
		const words = new Set(input);
		console.log(
			Array.from(words)
				.sort((a, b) => {
					if (a.length === b.length) {
						if (a < b) {
							return -1;
						} else {
							return 1;
						}
					} else {
						return a.length - b.length;
					}
				})
				.join("\n"),
		);
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
