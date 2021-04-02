const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	console.log(
		Array.from("abcdefghijklmnopqrstuvwxyz")
			.map((char) => line.indexOf(char))
			.join(" "),
	);
	rl.close();
}).on("close", function () {
	process.exit();
});
