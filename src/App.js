import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import images from "./images.json";
import Main from "./component/Main";

let correctGuesses = 0;
let topScore = 0;
let alertMessage = "";

function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}

class App extends React.Component {
	state = {
		images,
		alertMessage,
		topScore,
		correctGuesses
	};

	handleClick = id => {
		const images = this.state.images;

		const clickedImage = images.filter(image => image.id === id);

		if (clickedImage[0].clicked) {
			correctGuesses = 0;
			alertMessage = "Incorrect Guess";

			for (let i = 0; i < images.length; i++) {
				images[i].clicked = false;
			}

			this.setState({ alertMessage });
			this.setState({ correctGuesses });
			this.setState({ images });
		} else if (correctGuesses < 11) {
			clickedImage[0].clicked = true;

			correctGuesses++;

			alertMessage = "Correct Guess";

			if (correctGuesses > topScore) {
				topScore = correctGuesses;
				this.setState({ topScore });
			}

			shuffle(images);

			this.setState({ images });
			this.setState({ correctGuesses });
			this.setState({ alertMessage });
		} else {
			clickedImage[0].clicked = true;

			correctGuesses = 0;
			alertMessage = "WINNER!";
			topScore = 12;
			this.setState({ topScore });

			for (let i = 0; i < images.length; i++) {
				images[i].clicked = false;
			}

			shuffle(images);

			this.setState({ images });
			this.setState({ correctGuesses });
			this.setState({ alertMessage });
		}
	};

	render() {
		const imgList = this.state.images.map(image => (
			<Main
				id={image.id}
				image={image.image}
				key={image.id}
				handleClick={this.handleClick}
			/>
		));
		return (
			<div className="wrapper">
				<Navbar
					alertMessage={this.state.alertMessage}
					topScore={this.state.topScore}
					correctGuesses={this.state.correctGuesses}
				/>
				<div className="container">
					<div class="row">{imgList}</div>
				</div>
			</div>
		);
	}
}

export default App;
