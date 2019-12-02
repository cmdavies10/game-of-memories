import React from "react";
import "../styles/Style.css";
import Jumbotron from "react-bootstrap/Jumbotron";

function Score(props) {
	return (
		<div className="container">
			<Jumbotron className="text-center bg-dark text-white">
				<h2>
					TEST YOUR MEMORY SKILLS BY NOT CHOOSING THE SAME CHARACTERS
					TWICE
				</h2>
				<br />
				<hr />
				<br />
				<h3>
					Score: {props.correctGuesses} | Top Score: {props.topScore}
				</h3>
			</Jumbotron>
		</div>
	);
}

export default Score;
