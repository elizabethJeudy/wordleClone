import wordBank from "./word-bank.txt";

// each array represents each attempt at a word
export const boardDefault = [
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
];

// function will read off words in word bank and create a word set
// the word bank is fetched using async/await
// the response will then formula response to text
// grabs final results
export const generateWordSet = async () => {
	let wordSet;
	let todaysWord;
	await fetch(wordBank)
		.then((response) => response.text())
		.then((result) => {
			const wordArr = result.split("\n");
			todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
			wordSet = new Set(wordArr);
		});

	return { wordSet, todaysWord };
};
