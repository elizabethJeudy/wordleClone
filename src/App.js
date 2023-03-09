import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { boardDefault } from "./components/Words";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext } from "react";

export const AppContext = createContext();

// keeps track of letter moving to cells with
// each attempt and letter positions
export default function App() {
	const [board, setBoard] = useState(boardDefault);

	// checks if letter/word is correct
	const correctWord = "RIGHT";

	// checks which letter was selected
	const onSelectLetter = (keyValue) => {
		if (currentAttempt.letterPosition > 4) return;

		const newBoard = [...board];
		// changes the current board based on the current attempt with positioning of letter adding one to move each letter forward
		newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
		setBoard(newBoard);
		setCurrentAttempt({
			...currentAttempt,
			letterPosition: currentAttempt.letterPosition + 1,
		});
	};

	const onDelete = () => {
		if (currentAttempt.letterPosition === 0) return;
		const newBoard = [...board];
		newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
		setBoard(newBoard);
		setCurrentAttempt({
			...currentAttempt,
			letterPosition: currentAttempt.letterPosition - 1,
		});
	};

	const onEnter = () => {
		if (currentAttempt.letterPosition !== 5) return;
		setCurrentAttempt({
			attempt: currentAttempt.attempt + 1,
			letterPosition: 0,
		});
	};

	const [currentAttempt, setCurrentAttempt] = useState({
		attempt: 0,
		letterPosition: 0,
	});
	return (
		<div className="App">
			<div className="container">
				<Nav />
				{/* gives access to pass the states with value */}
				<AppContext.Provider
					value={{
						board,
						setBoard,
						currentAttempt,
						setCurrentAttempt,
						onSelectLetter,
						onEnter,
						onDelete,
						correctWord,
					}}
				>
					<div className="game">
						<Board />
					</div>

					<Keyboard />
				</AppContext.Provider>
			</div>
		</div>
	);
}
