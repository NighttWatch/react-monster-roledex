import { useContext, Fragment } from "react";

import CategoryPreview from "../../category-preview/category-preview.compenent";

import { CategoriesContext } from "../../../context/categories.context";


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
  
    return (
      <Fragment>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products} />;
        })}
      </Fragment>
    );
  };
  
  export default CategoriesPreview;