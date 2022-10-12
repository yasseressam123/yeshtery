import SideModal from "../../ui/side-modal";
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import CartItem from "../CartItem/CartItem";

import classes from './cart.module.scss';


const Cart = (props)=>{
    const cartCtx = useContext(CartContext);
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
    return(
        <SideModal onClose={props.onClose} >
            <div className={classes.cartTitle}>
                <p>My Cart</p>
            </div>
            <div className={classes.cartSummary}>
                <p>Cart Summary</p>
            </div>
            {cartItems} 
            <div className={classes.cartTotal}>
                <p>Total: <span>{totalAmount}</span> LE</p>
            </div>
            <div className={classes.actions}>
              <button className={classes.review}>
                Review Cart
              </button>
              <button className={classes.checkout}>
                Complete Checkout
              </button>
            </div>
        </SideModal>
    )
}

export default Cart;