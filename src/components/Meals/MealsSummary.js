import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Pyszna szamka pod twoimi drzwiami</h2>
      <p>
        Wybierz swój posiłek sposród dokładnie wyselekcjowanego menu. Dostępne na miejscu lub w dostawie pod Państwa drzwi.
      </p>
      <p>
        Wszytskie nasze posiłki są pieczołowicie przygotowywane przez naszych kucharzy aby móc zaskakiwać smakiem za kazdym razem!
      </p>
    </section>
  );
};

export default MealsSummary;
