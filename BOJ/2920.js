const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
rl.on("line", function (line) {
	switch (line.split(" ").join("")) {
		case "12345678":
			console.log("ascending");
			break;
		case "87654321":
			console.log("descending");
			break;
		default:
			console.log("mixed");
	}

	rl.close();
}).on("close", function () {
	process.exit();
});
