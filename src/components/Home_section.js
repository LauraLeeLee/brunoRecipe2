import React, { Component } from 'react';
import HomeGreeting from './Home_greeting.js';
import HomeImage from './Home_image.js';


class HomeSection extends Component {
  render(){
    return(
      <React.Fragment>
        <section className="home_section">
          <HomeImage />
          <HomeGreeting />
        </section>
      </React.Fragment>
    );
  }
}

export default HomeSection;
