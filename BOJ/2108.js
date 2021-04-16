const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];

function getAverage(N, nums) {
	let sum = nums[0];
	for (let i = 1; i < N; i++) {
		sum += nums[i];
	}
	return Math.round(sum / N);
}

function getMid(N, nums) {
	let centIdx = ~~(N / 2);
	return nums[centIdx];
}

function getMode(N, nums) {
	const modeObj = {};
	let modeList = [];
	let maxCount = 0;

	nums.forEach((num) => {
		if (!modeObj[num]) {
			modeObj[num] = 1;
		} else {
			modeObj[num]++;
		}
	});

	Object.keys(modeObj).forEach((key) => {
		const count = modeObj[key];

		if (maxCount <= count) {
			maxCount = count;
		}
	});

	Object.keys(modeObj).forEach((key) => {
		const count = modeObj[key];

		if (maxCount === count) modeList.push(+key);
	});

	modeList.sort((a, b) => a - b);

	if (modeList.length === 1) {
		return modeList[0];
	} else {
		return modeList[1];
	}
}

function getRange(N, nums) {
	const max = nums[N - 1];
	const min = nums[0];

	return max - min;
}

rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	const N = +input.shift();
	const nums = input.map((_) => +_).sort((a, b) => a - b);

	const average = getAverage(N, nums);
	const cent = getMid(N, nums);
	const mode = getMode(N, nums);
	const range = getRange(N, nums);

	console.log(average);
	console.log(cent);
	console.log(mode);
	console.log(range);

	process.exit();
});
