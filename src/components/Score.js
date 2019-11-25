import React from "react";
import "../styles/Style.css";
import Jumbotron from "react-bootstrap/Jumbotron";

function Score(props) {
	return (
		<div className="container">
			<Jumbotron className="text-center">{props.children}</Jumbotron>
		</div>
	);
}

export default Score;
