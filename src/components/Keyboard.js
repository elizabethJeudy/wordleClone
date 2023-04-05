import React, { useCallback, useContext, useEffect } from "react";
import "./Keyboard.css";
import Key from "./Key";

import { RiDeleteBack2Line } from "react-icons/ri";
import { AppContext } from "../App";

export default function Keyboard() {
	const { onSelectLetter, onEnter, onDelete, usedLetters } =
		useContext(AppContext);
	// keys for each line
	const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
	const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

	// useEffect will call a specific function which will
	// handle the events on keyboard;
	// event will render typed key on keyboard
	const handleKeyboard = useCallback((event) => {
		if (event.key === "Enter") {
			onEnter();
		} else if (event.key === "Backspace") {
			onDelete();
		} else {
			keys1.forEach((key) => {
				if (event.key.toLowerCase() === key.toLowerCase()) {
					onSelectLetter(key);
				}
			});
			keys2.forEach((key) => {
				if (event.key.toLowerCase() === key.toLowerCase()) {
					onSelectLetter(key);
				}
			});
			keys3.forEach((key) => {
				if (event.key.toLowerCase() === key.toLowerCase()) {
					onSelectLetter(key);
				}
			});
		}
	});

	useEffect(() => {
		document.addEventListener("keydown", handleKeyboard);
		return () => {
			document.removeEventListener("keydown", handleKeyboard);
		};
	}, [handleKeyboard]);

	// key component takes in the value of the key
	return (
		<div className="keyboard" onKeyDown={handleKeyboard}>
			<div className="line1">
				{keys1.map((key) => {
					return <Key keyValue={key} used={usedLetters.includes(key)} />;
				})}
			</div>
			<div className="line2">
				{keys2.map((key) => {
					return <Key keyValue={key} used={usedLetters.includes(key)} />;
				})}
			</div>
			<div className="line3">
				<Key keyValue={"ENTER"} bigKey />
				{keys3.map((key) => {
					return <Key keyValue={key} used={usedLetters.includes(key)} />;
				})}
				<Key keyValue={"DELETE"} bigKey />
			</div>
		</div>
	);
}
