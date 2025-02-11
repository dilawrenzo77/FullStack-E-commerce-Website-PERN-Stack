import { React, useContext } from 'react';
import {Link} from "react-router-dom";
// import axios from 'axios';
import { ProductContext } from "../../pages/context";
import ProductCard from '../productCard/productCard';
import { AiOutlineSwapRight } from "react-icons/ai";
import "./section1.css";

const Section1 = () => {
   const { products } = useContext(ProductContext);
//    console.log(products);

    return (
        <div className='section1'>
            <div className="sectionTitle">
                <h1 className="title">Featured Products</h1>
            </div>
                <div className="productsTab">
                {products && products.map((product) => {
                    return(<ProductCard key={product.product_id} data={product} />)
                })}
                </div> 
            <div className="viewallBtn">
                <Link to="/catalog"><button className="viewall">View all  <AiOutlineSwapRight size={10}/></button></Link>
            </div>
        </div>
    );
}

export default Section1;
