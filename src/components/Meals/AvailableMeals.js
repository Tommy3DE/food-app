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
    photo: 'https://ocdn.eu/pulscms-transforms/1/0uLk9kpTURBXy8zNjVhYTVjMzY3OTdhZThmNjQ2OTUwYzBmMjMzNTI1ZC5qcGeTlQMAJ80E5s0CwZMFzQSwzQKkkwmmNDEwMzg2Bt4AAaEwAQ/sushi.jpeg'
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "Nasza niemiecka specjalnosc!",
    price: 36.5,
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1200px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG'
  },
  {
    id: "m3",
    name: "BBQ Burger",
    description: "Amerykanska tradycyjna potrawa",
    price: 49.99,
    photo: 'https://www.horecanet.pl/wp-content/uploads/2017/02/burgery-zdjecie-tytulowe-1200x900.jpg'
  },
  {
    id: "m4",
    name: "Sałatka",
    description: "Zdrowo i kolorowo",
    price: 28.99,
    photo: 'https://cdn.aniagotuje.com/pictures/articles/2022/05/28380914-v-1500x1500.jpg'
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
      photo={meal.photo}
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
