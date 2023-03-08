import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Key({ keyValue, bigKey }) {
	// gets access from the board (state)
	const {
		board,
		setBoard,
		currentAttempt,
		setCurrentAttempt,
		onSelectLetter,
		onEnter,
		onDelete,
	} = useContext(AppContext);

	// function allows you to select letter from keyboard and add to the game board
	const selectLetter = () => {
		if (keyValue === "ENTER") {
			onEnter();
		} else if (keyValue === "DELETE") {
			onDelete();
		} else {
			onSelectLetter(keyValue);
		}
	};

	// id bigKey depends on if a key is big or not
	return (
		<div className="key" id={bigKey && "big"} onClick={selectLetter}>
			{keyValue}
		</div>
	);
}
