import React, { Component } from "react";
import history from './history';

class Home extends Component {
  render() {
    return (
      <div class="header">
        <header class="heading">Bounty</header>
    <div class="logo"></div>
        <h2 style={{fontSize: 80}}>Welcome!</h2>
        <p>Admist the difficult times, supporting each other is a sign to show love and care. Remember that you aren't alone! If you need help or are willing to provide help, come check out our page!</p>

        <p>We welcome both first time and past users to participate!</p>
        <div class="grocery"></div>
      </div>
    );
  }
}

export default Home;
