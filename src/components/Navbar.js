import React from "react";

function Navbar(props) {
	return (
		<div className="wrapper">
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<a className="navbar-brand" href="/">
					<strong>Clicky Game</strong>
				</a>
				<div className="navbar-nav mx-auto">
					<ul>
						<strong>{props.clickMessage}</strong>
					</ul>
				</div>
				<div className="navbar-nav ml-auto">
					<ul>
						<strong>
							<li>Score: {props.correctGuesses}</li>
							<li>Top Score: {props.topScore}</li>
						</strong>
					</ul>
				</div>
			</nav>
			<div className="jumbotron">
				Clicky Game! Click on image to earn points, but don't click on
				any more than once!
			</div>
		</div>
	);
}

export default Navbar;
