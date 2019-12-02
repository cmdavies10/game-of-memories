import React from "react";
import "../styles/Style.css";
import Container from "react-bootstrap/Container";

function Navbar(props) {
	return (
		<div className="wrapper">
			<Container>
				<nav className="navbar text-white text-center">
					<h2>GoT</h2>
				</nav>
			</Container>
		</div>
	);
}

export default Navbar;
