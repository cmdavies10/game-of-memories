import React from "react";
import "../styles/Style.css";
import Container from "react-bootstrap/Container";

function Navbar(props) {
	return (
		<div className="wrapper">
			<Container>
				<nav className="navbar">
					<h2>GAME OF MEMORIES</h2>
				</nav>
			</Container>
		</div>
	);
}

export default Navbar;
