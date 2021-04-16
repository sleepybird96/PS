const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	const [M, N] = line.split(" ").map((_) => +_);
	const prime = [];
	for (let num = M; num <= N; num++) {
		if (!num) continue;
		if (num <= 1) continue;
		if (num === 2 || num === 3) {
			prime.push(num);
			continue;
		}
		if (num % 2 === 0) continue;
		const sqrt = Math.sqrt(num);
		let isPrime = true;
		for (let i = 3; i <= sqrt; i++) {
			if (num % i === 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) prime.push(num);
	}
	console.log(prime.join("\n"));
	rl.close();
}).on("close", function () {
	process.exit();
});
