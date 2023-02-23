import { useContext, useEffect } from 'react';
import { CiDiscount1 } from 'react-icons/ci'
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { useState } from 'react';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [discount, setDiscount] = useState('')
  const [afterDiscount, setAfterDiscount] = useState()
  const [hasDiscount, setHasDiscount] = useState(false)
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
    let dscNum = `${cartCtx.totalAmount.toFixed(2)}`
    console.log(dscNum)
    if(discount.length > 6 || discount.length < 6){
      alert('Kod musi posiadać 6 znaków, spróbuj OFF%10 lub OFF$10')
      setHasDiscount(false)
    } else if (discount === 'OFF%10'){
      setHasDiscount(true)
      let reducedPrice = (dscNum * 10) / 100
      let fixPrice = reducedPrice

      return setAfterDiscount(dscNum -= fixPrice)
    } else if (discount === 'OFF$10'){
      setHasDiscount(true)

      return setAfterDiscount(dscNum -= 10)
    }
  }
  

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Całkowita cena</span>
        <span>{totalAmount.includes("-")?'$0.00':totalAmount}</span>
      </div>
      {(hasDiscount && hasItems) && <div className={classes.total}>
        <span>Cena po rabacie</span>
        <span>{afterDiscount.toFixed(2)}</span>
      </div>}
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