const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	console.log(
		line.split(" ").reduce((acc, cur) => acc + Math.pow(Number(cur), 2), 0) %
			10,
	);
	rl.close();
}).on("close", function () {
	process.exit();
});
