import React, { Component } from "react";
import "./sidebar.scss";
import Sentences from '../Sentences';
import Paragraphs from '../Paragraphs';



class SidebarComponent extends Component {
	render() {
		return (
			<div className="sidebar-container">
				<form action="" className="sentences--container">
				 <Sentences updateSentences={this.props.updateSentences} numSentences={this.props.numSentences}/>
			</form>

			<form action="" className="paragraphs--container">
			 <Paragraphs updateParagraphs={this.props.updateParagraphs} numParagraphs={this.props.numParagraphs}/>
		</form>
			</div>
		);
	}
}

export default SidebarComponent;
