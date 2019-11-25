import React from "react";

const styles = {
	height: 200,
	width: 200,
	padding: 10
};

// card layout in grid with onClick
function Main(props) {
	return (
		<div className="col-3">
			<div className="img-container">
				<img
					onClick={props.handleClick}
					name={props.name}
					src={props.image}
					alt=""
					style={styles}
				></img>
			</div>
		</div>
	);
}

export default Main;
