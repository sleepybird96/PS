const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	console.log(
		Math.max(...line.split(" ").map((n) => [...n].reverse().join(""))),
	);
	rl.close();
}).on("close", function () {
	process.exit();
});
