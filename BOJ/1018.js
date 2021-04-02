const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];

rl.on("line", function (line) {
	input.push(line);
	if (input.length === +input[0].split(" ")[0] + 1) {
		input.shift();

		const board = input.slice();
		const N = board.length;
		const M = board[0].length;

		const findCase = (row, column) => {
			//흰색으로 시작하는 경우
			let whiteCount = 0;
			//검정으로 시작하는 경우
			let blackCount = 0;

			for (let r = row; r < row + 8; r++) {
				for (let c = column; c < column + 8; c++) {
					//홀수 행일 때
					if (r % 2 === 0) {
						//홀수 열일 때
						if (c % 2 === 0) {
							//흰색으로 시작하는경우
							if (board[r][c] !== "W") whiteCount++;
							//검정으로 시작하는경우
							if (board[r][c] !== "B") blackCount++;
						}
						//짝수 열일 때
						else {
							//흰색으로 시작하는 경우
							if (board[r][c] === "W") whiteCount++;
							//검정으로 시작하는 경우
							if (board[r][c] === "B") blackCount++;
						}
					}
					//짝수 행일 때
					else {
						//홀수 열일 때
						if (c % 2 === 0) {
							//흰색으로 시작하는 경우
							if (board[r][c] === "W") whiteCount++;
							//검정으로 시작하는 경우
							if (board[r][c] === "B") blackCount++;
						} else {
							//흰색으로 시작하는경우
							if (board[r][c] !== "W") whiteCount++;
							//검정으로 시작하는경우
							if (board[r][c] !== "B") blackCount++;
						}
					}
				}
			}
			return Math.min(whiteCount, blackCount);
		};

		let answer = Number.MAX_SAFE_INTEGER;
		for (let r = 0; r + 8 <= N; r++) {
			for (let c = 0; c + 8 <= M; c++) {
				answer = Math.min(answer, findCase(r, c));
			}
		}
		console.log(answer);
		rl.close();
	}
}).on("close", function () {
	process.exit();
});
