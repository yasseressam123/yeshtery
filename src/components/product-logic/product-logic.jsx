import { useState } from "react";
import Rate from "../rating/rating";
import classes from "./product-logic.module.scss";


const ProductLogic = (props)=>{
    const sizes = [
        {name:'Small' , active: false},
        {name:'Medium' , active: false},
        {name:'Large' , active: true},
        {name:'X Large' , active: false},
        {name:'XX Large' , active: false}
    ];
    const [value , setValue] = useState(1);

    const CalculateProduct = (event)=>{
        let type = event.currentTarget.getAttribute('data-attr');
        if(type === 'dec'){
            let newValue = value - 1;
            setValue(newValue);
        }else{
            let newValue = value + 1;
            setValue(newValue);
        }
    }
  
    const submitHandler = (event) => {
      event.preventDefault();
  
      const enteredAmount = value;
      props.onAddToCart(enteredAmount );
    };
    return(
        <div className={classes['product-container']}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="39.922" viewBox="0 0 60 39.922"><g transform="translate(-7990.418 -623.552)"><path d="M8050.12,655.989H8047.5a1.751,1.751,0,0,0-.38-.911,1.969,1.969,0,0,0-1.417-.425,2.119,2.119,0,0,0-1.354.325.84.84,0,0,0-.289.668c0,.4.551.713,1.643.957a25.946,25.946,0,0,1,2.69.695c.145.054.271.1.362.144a2.53,2.53,0,0,1,1.661,2.384,3.022,3.022,0,0,1-1.616,2.844c-.136.073-.262.136-.407.2a6.11,6.11,0,0,1-2.419.451,6.632,6.632,0,0,1-3.3-.723,3.119,3.119,0,0,1-1.186-1.158,3.259,3.259,0,0,1-.394-1.631h2.744a1.3,1.3,0,0,0,.506,1.092,2.814,2.814,0,0,0,1.706.4,2.062,2.062,0,0,0,1.355-.379.845.845,0,0,0,.342-.668c0-.425-.54-.758-1.616-.993a17.644,17.644,0,0,1-3.033-.823,2.516,2.516,0,0,1-1.643-2.41,3.147,3.147,0,0,1,.858-2.247,4.244,4.244,0,0,1,3.241-1.147,6.79,6.79,0,0,1,2.844.505,1.069,1.069,0,0,1,.172.091,2.859,2.859,0,0,1,1.162,1.111A3.318,3.318,0,0,1,8050.12,655.989Z"/><path d="M8048.721,649.6a.213.213,0,0,0-.037-.136.192.192,0,0,0-.116-.09,1.372,1.372,0,0,0-.173-.028h-.414v.506h.414a.39.39,0,0,0,.244-.072A.228.228,0,0,0,8048.721,649.6Zm.217-.272a.4.4,0,0,1,.081.244.44.44,0,0,1-.136.325.524.524,0,0,1-.352.154.431.431,0,0,1,.145.09l.252.334.2.334h-.325l-.154-.271a1.532,1.532,0,0,0-.253-.361.125.125,0,0,0-.036-.027l-.216-.063h-.162v.722h-.272v-1.7h.587c.036,0,.073.009.1.009a.973.973,0,0,1,.326.045A.4.4,0,0,1,8048.938,649.326Z"/><path d="M8049.705,649.941a1.32,1.32,0,0,0-.172-.66,1.274,1.274,0,0,0-.487-.487,1.4,1.4,0,0,0-.642-.171h-.009a1.4,1.4,0,0,0-.64.171,1.259,1.259,0,0,0-.488.487,1.281,1.281,0,0,0,0,1.31,1.226,1.226,0,0,0,.478.478,1.3,1.3,0,0,0,.65.172h.009a1.3,1.3,0,0,0,.651-.172,1.222,1.222,0,0,0,.478-.478A1.308,1.308,0,0,0,8049.705,649.941Zm.262,0a1.544,1.544,0,0,1-.208.776,1.367,1.367,0,0,1-.578.577,1.507,1.507,0,0,1-.777.209h-.009a1.5,1.5,0,0,1-.775-.209,1.371,1.371,0,0,1-.579-.577,1.542,1.542,0,0,1-.207-.776,1.566,1.566,0,0,1,.207-.795,1.452,1.452,0,0,1,.587-.578,1.705,1.705,0,0,1,.767-.207h.009a1.613,1.613,0,0,1,.768.207,1.391,1.391,0,0,1,.587.578A1.567,1.567,0,0,1,8049.967,649.941Z"/><path d="M8034.609,637.184l7.413,12.351h-11.908l-7.078-11.8-5.362-8.929,5.362-3.223,3.376-2.031Z"/><path d="M8039.991,658.11v5.065h-2.465v-.56a5.273,5.273,0,0,1-2.889.859h-.028a5.363,5.363,0,0,1,0-10.726h.028a5.288,5.288,0,0,1,2.889.857v-.586h2.465Zm-2.465.561v-1.12a2.954,2.954,0,0,0-2.889-2.384h-.028a2.948,2.948,0,0,0,0,5.9h.028A2.961,2.961,0,0,0,8037.526,658.671Z"/><path d="M8028.417,658.11v5.065h-2.465v-.56a5.3,5.3,0,0,1-2.889.859h-.027a5.363,5.363,0,0,1,0-10.726h.027a5.311,5.311,0,0,1,2.889.857v-4.07h2.465Zm-2.465.561v-1.12a2.954,2.954,0,0,0-2.889-2.384h-.027a2.948,2.948,0,0,0,0,5.9h.027A2.961,2.961,0,0,0,8025.952,658.671Z"/><path d="M8023.036,644.677l2.907,4.858h-11.9l-6.607-11-.289-.479.289-.171,8.459-5.093Z"/><rect width="2.681" height="10.428" transform="translate(8014.053 652.748)"/><rect width="2.681" height="2.356" transform="translate(8014.053 649.588)"/><path d="M8012.825,658.11v5.065h-2.464v-.56a5.324,5.324,0,0,1-2.9.859h-.027a5.363,5.363,0,0,1,0-10.726h.027a5.339,5.339,0,0,1,2.9.857v-4.07h2.464Zm-2.464.561v-1.12a2.956,2.956,0,0,0-2.9-2.384h-.027a2.948,2.948,0,0,0,0,5.9h.027A2.963,2.963,0,0,0,8010.361,658.671Z"/><path d="M8007.436,645.471l2.437,4.063h-11.908l-1.336-2.23,8.748-5.254Z"/><path d="M8001.134,658.11v5.065h-2.464v-.56a5.329,5.329,0,0,1-2.9.859h-.028a5.363,5.363,0,0,1,0-10.726h.028a5.344,5.344,0,0,1,2.9.857v-.586h2.464Zm-2.464.561v-1.12a2.956,2.956,0,0,0-2.9-2.384h-.028a2.948,2.948,0,0,0,0,5.9h.028A2.963,2.963,0,0,0,7998.67,658.671Z"/></g></svg>
            </div>
            <div className={classes['title-container']}>
                <p className={classes['product-name']}>Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <p className={classes['product-type']}>Men</p>
            </div>
            <div>
                <Rate/>
                <div className={classes['product-price']}>
                    <p className={classes['actual-price']}>9,999 <sub>LE</sub></p>
                    <p className={classes['discout-price']}>9,999 LE</p>
                    <div className={classes['discout']}>
                        <p>30% Off</p>
                    </div>
                </div>
                <div className={classes['product-size']}>
                    {
                        sizes.map((size)=>{
                            return(
                                <div className={size.active ? classes.active : ''}  key={size.name}>
                                    <p>{size.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes['quantity-container']}>
                <p className={classes['quantity-main']}>Quantity</p>
                <div className={classes['quantity-logic']}>
                    <button onClick={CalculateProduct} data-attr="dec" className={classes['quantity-calc']} disabled={value > 1 ? false : true}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2"><path d="M8019.418,1241.5h-10a1,1,0,0,0,0,2h10a1,1,0,0,0,0-2Z" transform="translate(-8008.418 -1241.499)"/></svg>
                    </button>
                    <div className={classes['quantity-value']}>
                        <p>{value}</p>
                    </div>
                    <button onClick={CalculateProduct} data-attr="inc" className={classes['quantity-calc']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="M8223.418,1241.5h-4v-4a1,1,0,0,0-2,0v4h-4a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0v-4h4a1,1,0,0,0,0-2Z" transform="translate(-8212.418 -1236.499)"/></svg>
                    </button>
                </div>
            </div>
            <div className={classes['quantity-btns']}>
                <button className={classes['addCart']} onClick={submitHandler}>Add To Cart</button>
                <button className={classes['pickup']}>Pickup From Store</button>
            </div>
        </div>
    )
};



export default ProductLogic;