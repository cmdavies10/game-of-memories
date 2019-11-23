import React from "react";

const styles = {
	height: 200,
	width: 200,
	padding: 10
};

// card layout in grid with onClick
function Main(props) {
	return (
		<div
			className="col-3"
			// onClick={() => props.handleClick(props.id)}
		>
			<div className="img-container">
				<img src={props.image} alt="" style={styles}></img>
			</div>
		</div>
	);
}

export default Main;
