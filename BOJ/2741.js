const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	let result = "";
	for (let n = 1; n <= line; n++) result += n + "\n";
	console.log(result);
	rl.close();
}).on("close", function () {
	process.exit();
});
