import React, { Component } from 'react';
import IngredientsPic from '../images/ingredients.jpg';

class HomeImage extends Component {
  render(){
    return(
      <article className="image-section">
       <img className="titleimage" src={IngredientsPic} alt="italian food ingredients"/>
     </article>
    );
  }
}

export default HomeImage;
