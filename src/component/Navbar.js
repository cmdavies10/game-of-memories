import React from "react";
import "../styles/Style.css";
import Container from "react-bootstrap/Container";

function Navbar(props) {
	return (
		<div className="wrapper">
			<Container>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary text-white text-center">
					<h2>GAME OF MEMORIES (GoT)</h2>

					{/* <div className="navbar-nav ml-auto">
					<h3>
						Score: {props.correctGuesses} | Top Score:{" "}
						{props.topScore}
					</h3>
				</div> */}
				</nav>
			</Container>
			{/* <div className="jumbotron text-center">
				<h4>
					TEST YOUR MEMORY BY NOT CLICKING ON THE SAME CHARACTER TWICE
				</h4>
			</div> */}
		</div>
	);
}

export default Navbar;
