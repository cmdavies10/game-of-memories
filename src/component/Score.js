import React from "react";
import "../styles/Style.css";
import Jumbotron from "react-bootstrap/Jumbotron";

const styles = {
	height: 50
};

function Score(props) {
	return (
		<div className="container">
			<Jumbotron
				className="text-center text-white bg-secondary"
				styles={styles}
			>
				<h3>
					Test your memory skills by not choosing the same character
					twice.
				</h3>
				<hr />
				<div style={{ color: "white" }}>
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
