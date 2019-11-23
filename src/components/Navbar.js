import React from "react";
import "../styles/Style.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Jumbotron from "react-bootstrap/Jumbotron";

function NavbarComponent() {
	return (
		<div>
			<Container>
				<Navbar className="text-white">Game of Memories</Navbar>
			</Container>
		</div>
	);
}

export default NavbarComponent;
