import React, {useContext} from 'react';
import { ProductContext } from "../../pages/context";
import { FaShoppingCart } from "react-icons/fa";
import "./productCard.css";
import ProductImages from "../images.js";



const ProductCard = (props) => {
    const data = props.data;
    const { addToCart } = useContext(ProductContext);
   

    const imgArr =  data.name.toLowerCase().split(" ").join("");
    //console.log(imgArr)

    return (
        <div>
            <div className="card">
                <img src={ProductImages[imgArr]} alt="" className="productImg" />
                <p className="limitedMessage">Limited to 20 piece</p>
                <div className="prod">
                    <div className="productDetails">
                        <h1 className="productName">{data.name}</h1>
                        <h3 className="productPrice">&#8358;{data.price}</h3>
                    </div>
                    <div className="cartIcon"><FaShoppingCart size={20} onClick={() => addToCart(data)}/></div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
