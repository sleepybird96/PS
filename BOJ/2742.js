const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (n) {
	let result = "";
	for (; n >= 1; n--) result += n + "\n";
	console.log(result);
	rl.close();
}).on("close", function () {
	process.exit();
});
