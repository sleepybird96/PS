const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];

function isPrime(num) {
	if (num === 0) return false;
	if (num === 1) return false;
	if (num === 2) return true;
	if (num % 2 === 0) return false;

	for (let n = 3; n * n <= num; n += 2) {
		if (num % n === 0) return false;
	}
	return true;
}

function searchPrime(N, nums) {
	let count = 0;

	for (let i = 0; i < N; i++) {
		if (isPrime(nums[i])) count += 1;
	}

	return count;
}

rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	const N = +input[0];
	const nums = input[1].split(" ").map((_) => +_);

	const result = searchPrime(N, nums);

	console.log(result);

	process.exit();
});
