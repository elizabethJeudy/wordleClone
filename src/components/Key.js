import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Key({ keyValue, bigKey }) {
	// gets access from the board (state)
	const { board, setBoard, currentAttempt, setCurrentAttempt } =
		useContext(AppContext);

	// function allows you to select letter from keyboard and add to the game board
	const selectLetter = () => {
		if (keyValue === "ENTER") {
			if (currentAttempt.letterPosition !== 5) return;
			setCurrentAttempt({
				attempt: currentAttempt.attempt + 1,
				letterPosition: 0,
			});
		} else {
			if (currentAttempt.letterPosition > 4) return;

			// checks which letter was selected
			const newBoard = [...board];
			// changes the current board based on the current attempt with positioning of letter adding one to move each letter forward
			newBoard[currentAttempt.attempt][currentAttempt.letterPosition] =
				keyValue;
			setBoard(newBoard);
			setCurrentAttempt({
				...currentAttempt,
				letterPosition: currentAttempt.letterPosition + 1,
			});
		}
	};

	// id bigKey depends on if a key is big or not
	return (
		<div className="key" id={bigKey && "big"} onClick={selectLetter}>
			{keyValue}
		</div>
	);
}
