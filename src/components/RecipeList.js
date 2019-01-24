import React from 'react';
import {  Link } from "react-router-dom";

function RecipeList (props) {
  const { match, filteredList } = props;
  console.log({filteredList});
  console.log({match});

  const Li = <ul className="recipe_list_ul">
        {  (filteredList && filteredList.length>0 )&&
          filteredList.map((item) => (
           <li key={item.id}
               className="recipe_list_li">
               <Link to={`${item.category}/${item.id}`}>{item.name}</Link>
           </li>
           ))}
         </ul>
  const NoRecipes = (<p>No recipes yet! Check back soon!</p>)

  return(
    <React.Fragment>
      <article className="recipebox">
        {filteredList && filteredList.length ? Li : NoRecipes }
      </article>
    </React.Fragment>
  );
}

export default RecipeList
