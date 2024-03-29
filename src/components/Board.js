import React, { useContext } from "react";
import "./Board.css";
import Letters from "./Letters";

// attempt values represent each box letter attempt at each row

export default function Board() {
	return (
		<div className="board">
			<div className="row">
				{" "}
				<Letters letterPosition={0} attemptValue={0} />
				<Letters letterPosition={1} attemptValue={0} />
				<Letters letterPosition={2} attemptValue={0} />
				<Letters letterPosition={3} attemptValue={0} />
				<Letters letterPosition={4} attemptValue={0} />
			</div>
			<div className="row">
				<Letters letterPosition={0} attemptValue={1} />
				<Letters letterPosition={1} attemptValue={1} />
				<Letters letterPosition={2} attemptValue={1} />
				<Letters letterPosition={3} attemptValue={1} />
				<Letters letterPosition={4} attemptValue={1} />
			</div>
			<div className="row">
				<Letters letterPosition={0} attemptValue={2} />
				<Letters letterPosition={1} attemptValue={2} />
				<Letters letterPosition={2} attemptValue={2} />
				<Letters letterPosition={3} attemptValue={2} />
				<Letters letterPosition={4} attemptValue={2} />
			</div>
			<div className="row">
				<Letters letterPosition={0} attemptValue={3} />
				<Letters letterPosition={1} attemptValue={3} />
				<Letters letterPosition={2} attemptValue={3} />
				<Letters letterPosition={3} attemptValue={3} />
				<Letters letterPosition={4} attemptValue={3} />
			</div>
			<div className="row">
				<Letters letterPosition={0} attemptValue={4} />
				<Letters letterPosition={1} attemptValue={4} />
				<Letters letterPosition={2} attemptValue={4} />
				<Letters letterPosition={3} attemptValue={4} />
				<Letters letterPosition={4} attemptValue={4} />
			</div>
			<div className="row">
				<Letters letterPosition={0} attemptValue={5} />
				<Letters letterPosition={1} attemptValue={5} />
				<Letters letterPosition={2} attemptValue={5} />
				<Letters letterPosition={3} attemptValue={5} />
				<Letters letterPosition={4} attemptValue={5} />
			</div>
		</div>
	);
}
