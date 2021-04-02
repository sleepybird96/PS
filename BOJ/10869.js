const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	const [a, b] = line.split(" ");
	console.log([+a + +b, +a - +b, a * b, ~~(a / b), a % b].join("\n"));
	rl.close();
}).on("close", function () {
	process.exit();
});
