import React from "react";
import "./Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoIosStats } from "react-icons/io";
import { MdSettings } from "react-icons/md";

export default function Nav() {
	return (
		<nav>
			<GiHamburgerMenu />
			<h1> Wordle </h1>
			<RxQuestionMarkCircled />
			<IoIosStats />
			<MdSettings />
		</nav>
	);
}
