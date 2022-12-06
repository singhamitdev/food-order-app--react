import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Daal",
    description: "Protien rich delicious dal fry",
    price: 149,
  },
  {
    id: "m2",
    name: "Paneer Masala",
    description: "Fresh Paneer mixed with Masala Gravy",
    price: 299,
  },
  {
    id: "m3",
    name: "Chicken Kadhai",
    description: "A sufficient amount of spicy Chicken",
    price: 399,
  },
  {
    id: "m4",
    name: "Soup",
    description: "Healthy..., green... and hygenic...",
    price: 149,
  },
];
const AvailableMeals = () => {
  const mealItems = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealItems}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
