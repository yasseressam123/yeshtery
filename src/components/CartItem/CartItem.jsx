import img1 from '../../assets/images/img1-thumb.jpeg';
import classes from './CartItem.module.scss';

const CartItem = (props)=>{
    const price = `$${props.price.toFixed(2)}`;
    return(
        <div className={classes.cardContainer}>
            <div className={classes.cardImg}>
                <img src={img1} alt="image1"/>
            </div>
            <div>
                <p className={classes.cardName}>{props.name}</p>
                <p className={classes.cardQuantity}>Quantity: {props.amount}</p>
                <div className={classes.cardBox}>
                    <div className={classes.cardPrice}>
                        <p>{price} LE</p>
                    </div>
                    <div className={classes.cardRemove}>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartItem;