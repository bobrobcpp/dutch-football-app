import React, { Component } from 'react';
import logo from './football.svg';
import flag from './netherlands.svg';
import './App.css';
import ButtonExampleButton from './components/button_example_button.js';
import axios from 'axios';



class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={flag} className="Netherlands-flag" alt="Netherlands-flag" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dutch Eredivisie App</h1>
        </header>
        <p className="App-intro">
          Eredivisie table
        </p>
          <ButtonExampleButton />
      </div>
    );
  }

  componentDidMount(){

    axios({
      method:'get',
      url:'https://apifootball.com/api/?action=get_standings&league_id=137&APIkey=67b325e577b272060bf53f2300cb732e01bf8284ed454776545c8ab0bf8d2fa9',
      headers: {'Content-Type': 'application/json'}
    })
      .then(function(response) {
      console.log("Success");
    })
    .catch(function (error) {
      console.log(error);
    });


    // axios.get('https://www.apifootball.com/api/?action=get_standings&league_id=137&APIkey=67b325e577b272060bf53f2300cb732e01bf8284ed454776545c8ab0bf8d2fa9')
    // .then(console.log("Success"))
    // .catch(function (error) {
    //   console.log(error);
    // });

  };
}

export default App;
