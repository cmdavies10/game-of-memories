import React from "react";
// import Header from "./components/Header";
// import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import characters from "./characters.json";

// function shuffle(array) {
// 	array.sort(() => Math.random() - 0.5);
// }

class App extends React.Component {
	state = {
		characters: characters,
		pickedCharacters: [],
		topScore: 0,
		alertMessage: ""
	};

	// shuffle = array => {
	// 	array.sort(() => Math.random() - 0.5);
	// };

	handleClick = event => {
		// const newState = { ...this.state };
		const name = event.target.attributes.getNamedItem("name").value;
		alert("Name: " + name);
		// const images = this.state.characters;
		// const clickedImage = images.filter((characters) => characters.id === id)
		// this.setState(
		// 	(this.state.characters = this.shuffle(this.state.characters))
		// );
	};

	render() {
		const images = characters.map(characters => (
			<Main
				id={characters.id}
				name={characters.name}
				image={characters.image}
				key={characters.id}
				handleClick={this.handleClick}
			/>
		));
		return (
			<div className="wrapper">
				<Navbar
					clickMessage={this.state.pickedCharacters}
					topScore={this.state.topScore}
					alertMessage={this.state.alertMessage}
				/>
				<Score>INSERT SCORE COUNTER HERE</Score>
				<div className="container">
					<div className="row">{images}</div>
				</div>
			</div>
		);
	}
}

export default App;
