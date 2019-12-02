import React from "react";
import "../styles/Style.css";
import Container from "react-bootstrap/Container";

function Navbar(props) {
	return (
		<div className="wrapper text-center">
			<Container>
				<nav className="navbar">
					<h2>Game of Memories</h2>
				</nav>
			</Container>
		</div>
	);
}

export default Navbar;
