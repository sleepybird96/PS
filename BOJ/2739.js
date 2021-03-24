const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on("line", function (line) {
	for (let n = 1; n <= 9; n++) console.log(`${line} * ${n} = ${+line * n}`);
	rl.close();
}).on("close", function () {
	process.exit();
});
