import React from "react";

const styles = {
	width: 200,
	height: 200,
	padding: 10
};

function Main(props) {
	return (
		<div
			className="col-3"
			style={styles}
			onClick={() => props.handleClick(props.id)}
		>
			<div className="img-container">
				<img src={props.image} alt="" style={styles} />
			</div>
		</div>
	);
}

export default Main;
