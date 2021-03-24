const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	const [h, m] = line.split(" ");
	m - 45 >= 0
		? console.log(`${h} ${m - 45}`)
		: console.log(`${+h ? h - 1 : 23} ${60 - (45 - m)}`);
	rl.close();
}).on("close", function () {
	process.exit();
});
