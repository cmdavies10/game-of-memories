import React from "react";
import "../styles/Style.css";
import Jumbotron from "react-bootstrap/Jumbotron";

const styles = {
	height: 20
};

function Score(props) {
	return (
		<div className="container">
			<Jumbotron className="text-center text-dark-50" styles={styles}>
				<h3>
					Test your memory skills by not choosing the same character
					twice.
				</h3>
				<br />
				<div className="text-dark-50">
					<h4>
						Round Score: {props.correctGuesses} | High Score:{" "}
						{props.topScore}
					</h4>
				</div>
			</Jumbotron>
		</div>
	);
}

export default Score;
