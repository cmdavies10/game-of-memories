import React from "react";
import "../styles/Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function NavbarComponent() {
	return (
		<div>
			<Container>
				<Navbar>
					<a className="navbar-brand" href="#">
						Game of Memories
					</a>
					{/* <a className="nav-item nav-link" href="/">
						Link
					</a>
					<a className="nav-item nav-link" href="/">
						Link
					</a>
					<a className="nav-item nav-link" href="/">
						Link
					</a> */}
				</Navbar>
			</Container>
		</div>
	);
}

export default NavbarComponent;
