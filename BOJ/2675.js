const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];

rl.on("line", function (line) {
	input.push(line);
	if (input.length === +input[0] + 1 && input[0]) {
		input.forEach((test) => {
			const [count, code] = test.split(" ");
			if (!code) return;
			let result = "";
			[...code].forEach((char) => (result += char.repeat(+count)));
			console.log(result);
		});
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
