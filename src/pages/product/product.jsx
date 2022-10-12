import BreadcrumbExample from "../../components/Breadcrumbs/Breadcrumbs";
import ProductControl from "../../components/product-control/product-control";
import classes from "./product.module.scss";


const Product = ()=>{
    return(
        <section>
            <div className={classes.breadCrumb}>
                <div className="container">
                    <BreadcrumbExample/>
                </div>
            </div>
            <div className="container">
                <ProductControl/>
            </div>
        </section>
    )
}

export default Product;