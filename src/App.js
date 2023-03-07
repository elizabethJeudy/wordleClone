import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useState } from "react";
import { boardDefault } from "./components/Words";

export const AppContext = createContext();

export default function App() {
	const [board, setBoard] = useState(boardDefault);
	return (
		<div className="App">
			<div className="container">
				<Nav />
				{/* gives access to pass the states with value */}
				<AppContext.Provider value={{ board, setBoard }}>
					<Board />
					<Keyboard />
				</AppContext.Provider>
			</div>
		</div>
	);
}
