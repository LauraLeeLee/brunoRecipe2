import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Home_page.js';
import AboutMe from './About_me.js';
import Category from './Category';
import Recipe from './Recipepage.js';
import NoMatch from './NoMatch.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Search from './Search.js';
import allCategories from '../data/allCategories.json';
import Recipes from '../data/recipes.json';
// import firebase, { FirebaseContext } from './components/Firebase/firebase.js';
import firebase from './Firebase/firebase.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      recipes: [],
      allCategories: {},
      navCat: '',
      navImg: ''
    }
    // this.onNavigate = this.onNavigate.bind(this);
  }

  componentDidMount() {
    this.setState({
      recipes: Recipes,
      allCategories: allCategories
    });
  }

  // onNavigate = (navCat) => {
  //   console.log(navCat);
  //   this.setState({
  //     navCat: navCat
  //   });
  //   switch(navCat) {
  //     case 'Home':
  //       this.setState({view: 'home'});
  //       break;
  //     case 'About Me':
  //       this.setState({view: 'About Me'});
  //       break;
  //     case 'Recipes':
  //       this.setState({view: 'Recipes'});
  //       break;
  //     case 'Beef':
  //       this.setState({view: 'beef'});
  //       break;
  //     case 'Chicken':
  //       this.setState({view: 'Chicken'});
  //       break;
  //     case 'Pasta Pizza & Sauce':
  //       this.setState({view: 'Pasta Pizza & Sauce'});
  //       break;
  //     case 'Seafood':
  //       this.setState({view: 'Seafood'});
  //       break;
  //     case 'Salad & Soup':
  //       this.setState({view: 'Salad & Soup'});
  //       break;
  //     case 'Dessert':
  //       this.setState({view: 'Dessert'});
  //       break;
  //       case 'Antipasti':
  //         this.setState({view: 'Antipasti'});
  //         break;
  //     default: this.setState({view: 'home'});
  //   }
  // }

  render() {
    const { view, recipes, allCategories, navCat } = this.state;
    console.log({view});
    console.log({navCat});

    return (
      <Router>
          <div className="container" role="main">
          <Nav
            allCategories={allCategories}
            />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/About Me" component={AboutMe}/>
            <Route path="/Search" render={props => <Search {...props}
                                                       recipes={recipes}
                                                       />} />
            <Route path="/:category/:recipeId"
                  render={props => <Recipe {...props} recipes={recipes}/>}
            />
            <Route path="/:categoryId" render={props => <Category {...props}
                                                       recipes={recipes}
                                                       allCategories={allCategories} />} />

          {/* for a 404 page  */}
            <Route component={NoMatch} />

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
