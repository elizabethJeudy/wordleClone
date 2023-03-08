import React from "react";
import "./Keyboard.css";
import Key from "./Key";
import { RiDeleteBack2Line } from "react-icons/ri";

export default function Keyboard() {
	// keys for each line
	const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
	const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
	// key component takes in the value of the key
	return (
		<div className="keyboard">
			<div className="line1">
				{keys1.map((key) => {
					return <Key keyValue={key} />;
				})}
			</div>
			<div className="line2">
				{keys2.map((key) => {
					return <Key keyValue={key} />;
				})}
			</div>
			<div className="line3">
				<Key keyValue={"ENTER"} bigKey />
				{keys3.map((key) => {
					return <Key keyValue={key} />;
				})}
				<Key keyValue={"DELETE"} bigKey />
			</div>
		</div>
	);
}
