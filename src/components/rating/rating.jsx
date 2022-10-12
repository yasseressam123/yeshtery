import { Rating } from 'primereact/rating';

import classes from './rating.module.scss';

const Rate = ()=>{
    const value = 4;
    return(
        <div className={classes['rating-container']}>
            <Rating value={value} stars={5} cancel={false}/>
            <p className={classes['rating-value']}>4.9 of 5</p>
            <p className={classes['rating-no']}>22 Rates</p>
        </div>
    )
};

export default Rate;