import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../App";

export default function Letters({ letterPosition, attemptValue }) {
	const { board, correctWord, currentAttempt, setUsedLetters } =
		useContext(AppContext);
	const letters = board[attemptValue][letterPosition];

	// checks if correct or not
	const correct = correctWord[letterPosition] === letters;
	const almost =
		!correct && letters !== "" && correctWord.toUpperCase().includes(letters);
	// checks if letter is correct, almost, or wrong
	// if correct if true then set to correct;
	// if false set to almost;
	// if neither are true set to wrong
	const letterState =
		currentAttempt.attempt > attemptValue &&
		(correct ? "correct" : almost ? "almost" : "wrong");

	// runs whenever user moves to new attempt
	useEffect(() => {
		if (letters !== "" && !correct && !almost) {
			setUsedLetters((previous) => [...previous, letters]);
		}
	}, [currentAttempt.attempt]);

	return (
		<div className="letters" id={letterState}>
			{letters}
		</div>
	);
}
