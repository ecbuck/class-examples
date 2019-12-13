import React from "react";
import './Die.css'

class Die extends React.Component {
  constructor(props) {
    super(props);

    this.state = { result: "" };
    
    this.handleRoll = this.handleRoll.bind(this);
  }

  handleRoll() {
    const max = this.props.sides;

    const random = Math.floor((Math.random() * max) + 1);

    this.setState({
      result: random
    })
  }

  render() {
    return (
      <div className="die-container">
        {/* <img src="logo192.png" /> */}
        <div className="die-label">D{this.props.sides}</div>
        <button onClick={this.handleRoll}>Roll it!</button>
        <div className="result">
          Result:
          <span>{this.state.result}</span>
        </div>
      </div>
    );
  }
}

export default Die;
