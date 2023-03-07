import react from "react";

export default function Letters({ letterPosition, attemptValue }) {
	const letters = board[attemptValue][letterPosition];
	return <div className="letters"></div>;
}
