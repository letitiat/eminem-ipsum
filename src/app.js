import React, { Component } from "react";

import Sidebar from "./components/Sidebar";
import Generator from "./components/Generator";

import { words } from "./words";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			numParagraphs: 3,
			numSentences: 9,
			text: this.ipsum(1, 9, words)
		};

		// code for server/API version
		//this.search = this.search.bind(this);

		this.updateParagraphs = this.updateParagraphs.bind(this);
		this.updateSentences = this.updateSentences.bind(this);
	}

	generate() {
		// generate ipsum by passing in sentence and paragraph values from state and the words array
		//(words can be changed by denomination later)
		// text state is then passed down to generator component in props
		this.setState({
			text: this.ipsum(this.state.numParagraphs, this.state.numSentences, words)
		});
	}

	updateParagraphs(e) {
		// set value from paragraph select in state
		this.setState({ numParagraphs: e.target.value }, this.generate);
	}

	updateSentences(e) {
		// set value from sentence select in state
		this.setState({ numSentences: e.target.value }, this.generate);
	}

	ipsum(numParagraphs, numSentences, phrases) {
		// start text placeholder
		var text = "";
		if (numParagraphs < 1) {
			return text;
		}
		// build each paragraph based on user input
		for (var i = 0; i < numParagraphs; i++) {
			// start paragraph placeholder
			var paragraph = "";
			// build each sentence based on user input
			for (var j = 0; j < numSentences; j++) {
				// sentence placeholder
				var sentence = "";
				// 10 - 15 words per sentence, randomly, then loop that many times, grabbing random word
				var numWords = Math.floor(Math.random() * 6 + 10);

				for (var k = 0; k < numWords; k++) {
					// word placeholder
					var word = "";
					// get random index for words array
					var wordNum = Math.floor(Math.random() * phrases.length);
					word = phrases[wordNum];
					// if its not the first word, put a space in front of it
					if (k !== 0) {
						sentence += " ";
					}
					// add word to sentence placeholder and run word choosing loop again
					sentence += word;
				}
				// when word loop complete, punctuate sentence
				sentence += ".";
				// capitalized first letter of the sentence
				sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
				// add the sentence and space after to the paragraph
				paragraph += sentence;
				paragraph += " ";
			}
			// when sentence loop complete, added p tags for formatting and insert into text placeholder
			paragraph = "<p>" + paragraph + "</p>";
			text += paragraph;
		}
		return text;
	}

	render() {
		return (
			<div className="App">
							<Sidebar
								updateParagraphs={this.updateParagraphs}
								updateSentences={this.updateSentences}
								numParagraphs={this.state.numParagraphs}
								numSentences={this.state.numSentences}
							/>
							<Generator text={this.state.text} />
			</div>
		);
	}
}

export default App;
