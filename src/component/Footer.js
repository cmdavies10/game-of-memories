import React from "react";
import "../styles/Style.css";
import Container from "react-bootstrap/Container";
// import Footer from "react-bootstrap/Footer";

function FooterComponent(props) {
	return (
		<div>
			<Container>
				<br />
				<hr />
				<div className="footer text-center text-dark-50">
					c.m. davies
				</div>
			</Container>
		</div>
	);
}

export default FooterComponent;
