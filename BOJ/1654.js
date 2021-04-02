const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
	input.push(input.length ? +line : line);
	const [K, N] = input[0].split(" ");
	if (input.length === +K + 1) {
		input.shift();
		// let left = 0;
		// let right = Math.max(...input) + 1;
		let length = 0;
		const binarySearch = (left, right) => {
			// const mid = ~~((left + right) / 2);
			// const wire = input.reduce((sum, w) => {
			// 	return sum + ~~(w / mid);
			// }, 0);
			// if (wire >= N) {
			// 	if (mid > length) {
			// 		length = mid;
			// 		binarySearch(mid + 1, right);
			// 	}
			// } else {
			// 	binarySearch(left, mid - 1);
			// }
			while (left <= right) {
				let mid = ~~((left + right) / 2);
				let wire = input.reduce((sum, w) => {
					return sum + ~~(w / mid);
				}, 0);
				if (wire >= N) {
					if (mid > length) {
						length = mid;
					}
					left = mid + 1;
				} else {
					right = mid - 1;
				}
			}
		};
		binarySearch(
			1,
			input.reduce((max, n) => {
				return n > max ? n : max;
			}),
		);
		console.log(length);
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
