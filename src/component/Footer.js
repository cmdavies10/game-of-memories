import React from "react";
import "../styles/Style.css";
import Container from "react-bootstrap/Container";
// import Footer from "react-bootstrap/Footer";

function FooterComponent(props) {
	return (
		<div>
			<Container>
				<div className="text-center text-white-50">
					<br />
					<hr />
					<br />
					<p>C.M. Davies</p>
				</div>
			</Container>
		</div>
	);
}

export default FooterComponent;
