import React, { useContext, useState } from "react";
import { AppContext } from "../App";

export default function Letters({ letterPosition, attemptValue }) {
	const { board } = useContext(AppContext);
	const letters = board[attemptValue][letterPosition];
	return <div className="letters">{letters}</div>;
}
