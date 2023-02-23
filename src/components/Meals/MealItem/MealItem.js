import { useContext } from "react";
import { useState } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
import Modal from "../../UI/Modal";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [showCard, setShowCard] = useState(false);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const MealCard = () => {
    return (
      <Modal className={classes.meal__card}>
        <h1>{props.name}</h1>
        <h2>${props.price}</h2>
        <h3>{props.description}</h3>
        <img src={props.photo} alt={props.name} className={classes.photo} />
      </Modal>
    );
  };

  const cardHandler = () => {
    setShowCard((show) => !show);
  };

  return (
    <li className={classes.meal}>
      <div onClick={cardHandler}>
        {showCard && <MealCard />}
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
