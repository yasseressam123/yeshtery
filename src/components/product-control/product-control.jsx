import ImageSideShow from "../image-side-show/image-side-show";
import ProductLogic from "../product-logic/product-logic";

import classes from './product-control.module.scss';

import { useContext } from 'react';
import CartContext from "../../store/cart-context";


const ProductControl = ()=>{
    const cartCtx = useContext(CartContext);
    const addToCartHandler = amount => {
        cartCtx.addItem({
          id: 1,
          name: 'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          amount: amount,
          price: 9999
        });
    };
    return(
        <div className={classes.productControl}>
            <div className={classes.imageContainer}>
                <ImageSideShow/>
            </div>
            <div className={classes.productContainer}>
                <ProductLogic onAddToCart={addToCartHandler}/>
            </div>
        </div>
    )
};

export default ProductControl;