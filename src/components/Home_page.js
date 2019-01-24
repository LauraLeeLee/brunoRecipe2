import React, { Component } from 'react';
import Header from './Header.js';
import HomeSection from './Home_section.js';

class HomePage extends Component {
  render(){
    return(
      <div className = "home-page">
        <Header />
        <HomeSection />
     </div>
    );
  }
}

export default HomePage;
