import React, { Component } from "react";
import "./Sidebar.scss";
import Sentences from '../sentences';



class SidebarComponent extends Component {
	render() {
		return (
			<div className="sidebar-container">
				<div id="sidebar-header">Choose Your Options: </div>
				<form action="">
				 <Sentences updateSentences={this.props.updateSentences} numSentences={this.props.numSentences} updateParagraphs={this.props.updateParagraphs} numParagraphs={this.props.numParagraphs}/>
				{/* <Button id="copy-button" bsSize="large">Copy!</Button> */}
			</form>
			</div>
		);
	}
}

export default SidebarComponent;
