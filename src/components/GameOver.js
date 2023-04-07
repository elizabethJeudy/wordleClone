import React, { useContext } from "react";
import { AppContext } from "../App";

// renders message if user got word correct in 6 attempts or not
export default function GameOver() {
	const { gameOver, setGameOver, correctWord, currentAttempt } =
		useContext(AppContext);
	return (
		<div className="gameOver">
			<h3>{gameOver.guessedWord ? "You got it!" : "You didn't get it"}</h3>
			<h1> Correct: {correctWord} </h1>
			{gameOver.guessedWord && (
				<h3> You guessed {currentAttempt.attempt} attempts</h3>
			)}
		</div>
	);
}
