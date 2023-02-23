import { useContext } from 'react';
import { CiDiscount1 } from 'react-icons/ci'
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { useState } from 'react';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [discount, setDiscount] = useState('')
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const discountHandler =()=>{
    if(discount.length > 5){
      alert('wrong code')
    } else if (discount.includes('%')){
      console.log('% discount')
    } else if (discount.includes('$')){
      console.log('cash discount')
    } 
  }
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Całkowita cena</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Zamknij
        </button>
        {hasItems && <button className={classes.button}>Zamów</button>}
        {hasItems && <div className={classes.container}>
          <label className={classes.discount} htmlFor='dsc'>Kod rabatowy</label>
          <input type='text' className={classes.input} id='dsc' value={discount} onChange={(e)=>setDiscount(e.target.value)}>
            
          </input>
          <button className={classes.dscBtn} onClick={discountHandler}>
            <CiDiscount1 className={classes.dscIcon}/>
          </button>
        </div>  
        }
      </div>
    </Modal>
  );
};

export default Cart;