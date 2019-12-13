import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
  //  return (
     
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="buttons">
  {[1, 2, 3, 4, 5].map(number => {
    let text = number === 1 ? "die" : "dice";
    return (
      <button
        key={number}
        onClick={() => this.diceRoll(number)}
        className="button"
      >
        {number} {text}
      </button>
    );
  })}
</div>>
        <h1>Dice Roll Demo</h1>
      </div>
    );
  }
}
const DiceImage = ({ roll }) => {
  if (roll === 1) {
    return <img className="dice-image" src={one} alt="1" />;
  } else if (roll === 2) {
    return <img className="dice-image" src={two} alt="2" />;
  } else if (roll === 3) {
    return <img className="dice-image" src={three} alt="3" />;
  } else if (roll === 4) {
    return <img className="dice-image" src={four} alt="4" />;
  } else if (roll === 5) {
    return <img className="dice-image" src={five} alt="5" />;
  } else if (roll === 6) {
    return <img className="dice-image" src={six} alt="6" />;
  }
};
state = {
  numberOfDice: null,
  rolls: [],
  rollSum: null
};
diceRoll = numberOfDice => {
  let rolls = [];
  let rollSum = 0;
  for (let i = 0; i < numberOfDice; i++) {
    rolls[i] = Math.floor(Math.random() * 6) + 1;
    rollSum += rolls[i];
  }
  this.setState({
    numberOfDice,
    rolls,
    rollSum
  });
};
export default App;

