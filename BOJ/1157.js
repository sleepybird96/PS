const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	const obj = { mostCount: 0, mostFrequent: "" };

	line
		.toUpperCase()
		.split("")
		.forEach((char) => {
			if (!obj[char]) obj[char] = 0;
			obj[char]++;
			if (obj["mostCount"] === obj[char]) obj["mostFrequent"] = "?";
			if (obj[char] > obj["mostCount"]) {
				obj["mostCount"] = obj[char];
				obj["mostFrequent"] = char;
			}
		});
	console.log(obj["mostFrequent"]);
	rl.close();
}).on("close", function () {
	process.exit();
});
