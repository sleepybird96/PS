const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	const [x, y, w, h] = line.split(" ");
	console.log(
		Math.min(
			x,
			Math.abs(x - w),
			+x < +w ? y : Number.MAX_SAFE_INTEGER,
			+x < +w ? Math.abs(y - h) : Number.MAX_SAFE_INTEGER,
		),
	);
	rl.close();
}).on("close", function () {
	process.exit();
});
