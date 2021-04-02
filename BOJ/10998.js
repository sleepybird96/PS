const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	console.log(line[0] * line[2]);
	rl.close();
}).on("close", function () {
	process.exit();
});
