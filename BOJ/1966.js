const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	input.shift();

	for (let i = 0; i < input.length; i += 2) {
		const [n, m] = input[i].split(" ").map((_) => +_);

		const printList = input[i + 1].split(" ").map((_) => +_);
		const idx = [];
		for (let i = 1; i <= printList.length; i++) {
			idx.push(i);
		}
		idx[m] = "target";

		let order = 0;

		while (true) {
			if (printList[0] === Math.max(...printList)) {
				order++;

				if (idx[0] === "target") {
					console.log(order);
					break;
				} else {
					printList.shift();
					idx.shift();
				}
			} else {
				printList.push(printList.shift());
				idx.push(idx.shift());
			}
		}
	}
	process.exit();
});
