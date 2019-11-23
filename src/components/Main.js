import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const styles = {
	height: 200,
	width: 200
};

// card layout in grid with onClick
function Main(props) {
	return (
		<div>
			{/* <Container> */}
			<Card
				className="col-3"
				// style={styles}
				// onClick={() => props.handleClick(props.id)}
			>
				<div className="img-container">
					<img src={props.image} alt="" style={styles}></img>
				</div>
			</Card>
			{/* </Container> */}
		</div>
	);
}

export default Main;
