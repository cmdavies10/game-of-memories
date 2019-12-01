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

// function shuffle(array) {
// 	var m = array.length,
// 		t,
// 		i;

// 	// While there remain elements to shuffle…
// 	while (m) {
// 		// Pick a remaining element…
// 		i = Math.floor(Math.random() * m--);

// 		// And swap it with the current element.
// 		t = array[m];
// 		array[m] = array[i];
// 		array[i] = t;
// 	}

// 	return array;
// }

class App extends React.Component {
	state = {
		characters: characters,
		pickedCharacters: [],
		topScore: 0,
		alertMessage: "",
		correctGuesses: 0
	};

	// shuffle = array => {
	// 	array.sort(() => Math.random() - 0.5);
	// };

	handleClick = event => {
		const newState = { ...this.state };
		// newState.pickedCharacters.push(this.state.characters.id);
		// const clicked = event.target.attributes.getNamedItem("value").value;
		const clicked = event.target.attributes.getNamedItem("id").value;
		// alert("Clicked: " + clicked);
		newState.pickedCharacters.push(clicked);
		// this.setState({ pickedCharacters: clicked });
		console.log(newState.pickedCharacters);

		if (!newState.pickedCharacters.includes(clicked)) {
			newState.correctGuesses++;
			newState.alertMessage = "Good Choice";
			console.log(newState.alertMessage);
			newState.pickedCharacters.push(clicked);
			this.setState((this.state = newState));
			console.log(newState.correctGuesses);
		}
		// else {
		// 	newState.correctGuesses++;
		// 	newState.pickedCharacters.push(clicked);
		// 	newState.alertMessage = "Good Choice";
		// 	this.setState((this.state = newState));
		// }

		// const images = this.state.characters;
		// const characters = this.state.characters.filter(
		// 	character => characters.id === id
		// );
	};

	render() {
		const images = characters.map(characters => (
			<Main
				id={characters.id}
				name={characters.name}
				value={characters.clicked}
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
