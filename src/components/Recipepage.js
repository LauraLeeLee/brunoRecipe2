import React from 'react';
import Print from './Print.js';


function Recipe (props) {
  const {dbRecipes, match } = props;
  const paramsRecipeId = match.params.recipeId;

  const recipesId = dbRecipes.map(recipe => recipe.id);

  console.log({recipesId});
  console.log({paramsRecipeId});

  const selectedId = recipesId === paramsRecipeId;
  console.log({selectedId});

  const recipe = dbRecipes.find( recipe =>
    recipe.id === paramsRecipeId);
  if(recipe) {console.log({recipe});}




  return (
    <div className="recipe_container">
    <Print />
    <article className="recipecard">
      { recipe && recipe.name && (
        <h3>{`${recipe.name}`}</h3>
      )}
      { recipe && recipe.img && (
        <img className="recipe_image"
             src={require(`../images/${recipe.img}`)}
             alt={`${recipe.alt}`} />
      )}
      { recipe && recipe.description && (
        <p>{`${recipe.description}`}</p>
      )}
        <h4>Ingredients</h4>
        <ul className="recipe_ul">
        {recipe && recipe.ingredients && recipe.ingredients.map(ingredient => (
               <li key ={ingredient}
                   className="recipe_li">
                   {ingredient}
               </li>
           ))
          }
        </ul>
        <h4>Directions</h4>
        <ul className="recipe_ul">
        {recipe && recipe.directions && recipe.directions.map(direction => (
          <li key={direction}
              className="recipe_li">
          {direction}
          </li>
        ))
       }
        </ul>
      </article>
    </div>
  );
}

export default Recipe
