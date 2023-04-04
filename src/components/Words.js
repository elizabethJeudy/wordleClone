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
	await fetch(wordBank)
		.then((response) => response.text())
		.then((result) => {
			const wordArr = result.split("\n");
			wordSet = new Set(wordArr);
		});

	return { wordSet };
};
