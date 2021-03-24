const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	for (let num = 1; num <= Number(line); num++) {
		console.log("*".repeat(num));
	}
	rl.close();
}).on("close", function () {
	process.exit();
});
