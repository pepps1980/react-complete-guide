import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformendIntegredients = Object.keys(props.ingredients).map(
    (igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    }
  )
  .reduce((arr, el) => {
      return arr.concat(el)
  }, []);
  if (transformendIntegredients.length === 0){
    transformendIntegredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformendIntegredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
