import React, { Component } from 'react';
import "./paragraphs.scss";
import Paragraphs from "../../images/paragraphs.svg";

class SetParagraphs extends Component {
  render() {
    return (
      <div className="paragraphs">
        <form action="">
          <label htmlFor="sentences">Paragraphs:</label>
              <select name="paragraphs-number" value={this.props.numParagraphs}  onChange={this.props.updateParagraphs}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
        </form>
      </div>
    );
  }
}

export default SetParagraphs;
