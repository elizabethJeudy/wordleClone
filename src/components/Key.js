import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Key({ keyValue, bigKey, used }) {
	// gets access from the board (state)
	const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);

	// function allows you to use keyboard to
	// enter a letter, add it the the game board
	// and delete it
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
		<div
			className="key"
			id={bigKey ? "big" : used && "used"}
			onClick={selectLetter}
		>
			{keyValue}
		</div>
	);
}
