import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Najswiezsze ryby i warzywa",
    price: 62.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "Nasza niemiecka specjalnosc!",
    price: 36.5,
  },
  {
    id: "m3",
    name: "BBQ Burger",
    description: "Amerykanska tradycyjna potrawa",
    price: 49.99,
  },
  {
    id: "m4",
    name: "Sałatka",
    description: "Zdrowo i kolorowo",
    price: 28.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
