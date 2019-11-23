import React from "react";
import Container from "react-bootstrap/Container";

function Wrapper(props) {
	return (
		<div>
			<Container className="wrapper">{props.children}</Container>
		</div>
	);
}

export default Wrapper;
