const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let count = 0;
const ex = new Set();
rl.on("line", function (line) {
	count++;
	ex.add(line % 42);
	if (count >= 10) {
		console.log(ex.size);
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
