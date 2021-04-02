const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	let count = 1;
	let title = 666;
	while (count !== +line) {
		title++;
		if ((title + "").indexOf("666") !== -1 && title !== 666) count++;
	}
	console.log(title);
	rl.close();
}).on("close", function () {
	process.exit();
});
