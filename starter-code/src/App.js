import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends Component {
  state = {
    allFoods: foods
  }

  displayFoods = () => {
    return this.state.allFoods.map(eachFood => {
      return (<FoodBox key={eachFood.name} name={eachFood.name} calories={eachFood.calories} image={eachFood.image}/>)
    })
  }
  
  render() {
    console.log(foods)
    return (
      <div className="App">
        Wazzaaa
        {this.displayFoods()}
      </div>
    );
  }
}

export default App;