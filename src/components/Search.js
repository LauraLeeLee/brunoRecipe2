import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Debounce } from 'react-throttle';
import SearchResult from './SearchResult.js';

class Search extends Component {
    static propTypes = {
      recipes: PropTypes.array.isRequired
    }

    constructor(props) {
     super(props);
     this.state = {
       noResults: false
     }
     this.searchRecipes = this.searchRecipes.bind(this);
   }

   searchRecipes = (event) => {
     const {recipes} = this.props;

     const query = event.target.value.toLowerCase();
    //
     const filteredRecipes = recipes.filter(recipe => {
        return (recipe.name.toLowerCase().search(query) > -1 ||
         recipe.ingredients.filter(ingredient => {
          return ingredient.toLowerCase().search(query) > -1;
        }).length > 0
      );  // return recipe.ingredients.indexOf(query)  > -1;
     });

     console.log({filteredRecipes});
    this.setState(
      {filteredList: filteredRecipes}
    );
    console.log("%csearchRecipes fired", "font-size: 12px; background-color: yellow; color:red;")
   }

    render() {
      const { filteredList, noResults } = this.state;
      const { recipes, match } = this.props;
      console.log({recipes});
      console.log({filteredList});

      return(
        <div>
          <Debounce time="600" handler="onChange">
            <input type="text"
                   placeholder="Seach category or ingredient"
                   ref={input => this.search = input }
                   onChange= {this.searchRecipes}
            />
          </Debounce>

          <SearchResult recipes={recipes}
                        match={match}
                        filteredList={filteredList}/>

          <div className="no-search-results">
          { noResults && (
            <div>
              <p className="no-results">Sorry, no results found <br/>
                                        Please try your search again.</p>
            </div>
          )}
          </div>
        </div>
        )

  }
}

export default Search


  //another option to filter
  //const filteredRecipes = recipes.filter(recipe => {
//   if (recipe.name.toLowerCase().search(query) > -1) return true;
//   for (let r = 0; r < recipe.ingredients.length; r++) {
//     if (recipe.ingredients[r].toLowerCase().search(query) > -1) return true;
//   }
// });
