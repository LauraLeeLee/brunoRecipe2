import React from 'react';

function MenuInfo(props) {
  const {allCategories, match } = props;
  const currentCat = match.params.categoryId;
  // const paramsCatArray = currentCat.toLowerCase().split(" ");
  const categories = Object.keys(allCategories);
  console.log({categories});

  let currentItem = {}
  for( const cat of categories) {
      const item = allCategories[cat];
      if (item.id === currentCat) {
        currentItem = item;
      }
  }
  console.log({currentItem});
  console.log({currentCat});

  return(
    <React.Fragment>
     <article className="menu_info">
     {currentItem && currentItem.src &&
      (<React.Fragment>
          <h2>{`${currentItem.name} Recipes`}</h2>
          <img className="food_image"
               src={require(`../images/${currentItem.src}`)}
               alt={`${currentItem.alt}`} />
       </React.Fragment>)
      }
     </article>
  </React.Fragment>
 );
}

export default MenuInfo
