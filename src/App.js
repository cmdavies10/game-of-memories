import React from "react";
// import Header from "./components/Header";
// import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

class App extends React.Component {
	render() {
		const images = characters.map(characters => (
			<Main image={characters.image} />
		));
		return (
			<div>
				<Navbar />
				<Wrapper>{images}</Wrapper>
			</div>
		);
	}
}

export default App;
