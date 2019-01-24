import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  NavLink } from "react-router-dom";


class Nav extends Component {
  static propTypes = {
    allCategories: PropTypes.object.isRequired,
  }

  render(){
    const {allCategories} = this.props;
    const categories = Object.keys(allCategories);

    let Li = []
    for( const cat of categories) {
      const item = allCategories[cat];
      Li.push(
        <li key={item.id}
         className="category">
       <NavLink activeClassName="active-link" to ={`/${item.id}`}>{item.name} </NavLink>
       </li>
      )
     }

    return(
      <React.Fragment>
      <nav className="home-view-nav">
        <ul>
          <li>
           <NavLink activeClassName="active-link" exact to="/" >
              Home
           </NavLink>
          </li>
          <li><span>Recipes</span>
            <ul>
              {Li}
             <li>
             <NavLink activeClassName="active-link" to = "/Search">
                 Search All Recipes
             </NavLink>
             </li>
            </ul>
          </li>
          <li>
           <NavLink activeClassName="active-link" to="/About Me">
              About Me
           </NavLink>
          </li>
        </ul>
      </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
