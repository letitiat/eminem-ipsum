import React, { Component } from 'react';

class SetSentences extends Component {
  render() {
    return (
      <div className="sentences">
        <form action="">
          <label htmlFor="sentences">Sentences:</label>
            <select name="sentences-number" value={this.props.numSentences}  onChange={this.props.updateSentences}>
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

export default SetSentences;
