import React from 'react';
import RecipeFilter from './RecipeFilter.js';
import MenuInfo from './MenuInfo.js';

function Category (props) {
  const {allCategories, recipes, match} = props;
  console.log({allCategories});

  return(
    <React.Fragment>
     <section className="category_section">
       <MenuInfo  allCategories={allCategories}
                    match={match}/>
       <RecipeFilter match={match}
                   recipes={recipes}
                   allCategories={allCategories}/>
     </section>
   </React.Fragment>
  );
}

// main landing page for food category from Recipes nav selection
// class Category extends Component {
//   static propTypes = {
//     // view: PropTypes.string.isRequired,
//       // navbarItems: PropTypes.array.isRequired,
//       // recipes: PropTypes.array.isRequired,
//       // navCat: PropTypes.string.isRequired,
//     // navImg: PropTypes.string.isRequired
//   }
//
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     recipe: '',
//   //   }
//   // }
//
//   componentDidMount() {
//
//   }
//
//   render(){
//
//     return(
//       <div>
//         <section className="beef_section">
//
//           <MenuInfo  />
//           <RecipeList />
//         </section>
//       </div>
//     );
//   }
// }

export default Category
