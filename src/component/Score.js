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
				className="text-center bg-info text-white"
				styles={styles}
			>
				<h2>GAME OF MEMORIES</h2>
				<br />
				<h4>
					Test your memory skills by not choosing the same character
					twice.
				</h4>
				<hr />
				<div style={{ color: "red" }}>
					<h3>
						Score: {props.correctGuesses} | Top Score:{" "}
						{props.topScore}
					</h3>
				</div>
			</Jumbotron>
		</div>
	);
}

export default Score;
