const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
	if (line === "0") {
		console.log(
			input
				.map((num) => {
					const div = ~~(num.length / 2);
					if (num.length === 1) return "yes";
					if (num.slice(0, div) === [...num.slice(-div)].reverse().join("")) {
						return "yes";
					} else {
						return "no";
					}
				})
				.join("\n"),
		);
		rl.close();
	} else {
		input.push(line);
	}
}).on("close", function () {
	process.exit();
});
