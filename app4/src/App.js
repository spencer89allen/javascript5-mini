import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars = () => {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles').then(res => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    const cars = this.state.cars.map( car => ( 
        <div key={car.id}>
            <h2>{car.year} {car.make} {car.model}</h2>  
        </div> 
    ));
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {cars}
      </div>
    );
  }
}

export default App;
