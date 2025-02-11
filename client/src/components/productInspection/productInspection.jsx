import React, {useContext} from 'react';
import "./productInspection.css";
import ProductImages from "../images";
import { ProductContext } from '../../pages/context';
import { Link } from 'react-router-dom';

const ProductInspection = (props) => {
    const data = props.data;
    const {addToCart, removeFromCart} = useContext(ProductContext);
    const nameForImage = data.name.toLowerCase().split(" ").join("");
    return (
        <div className='productInspectionTab'>
            <div className="productInspectionContent">
                <div className="content1">
                    <p className="limitMessage">Limited to 20 piece</p>
                    <p className="available">available</p>
                </div>
                <div className="productContent">
                    <div className="inpectionText">
                        <h1 className="name">{data.name}</h1>
                        <p className="description">{data.description}</p>
                        <h4 className="price">Price per Item: &#8358;{data.price}</h4>
                        <h4>Total: &#8358;{data.price * data.quantity}</h4>
                        <Link to="/checkout"><button className="checkoutBtn">CheckOut</button></Link><button className="removeItemBtn"onClick={() => removeFromCart(data)}>Remove</button>
                    </div>
                    <div className="imageContent">
                        <img src={ProductImages[nameForImage]} alt="" className='img'/>
                    </div>
                </div>
                <button className="btn subtractBtn" onClick={() => removeFromCart(data)}>-</button>
                <span className="productCount">{data.quantity}</span>
                <button className="btn addBtn" onClick={() => addToCart(data)}>+</button>
            </div>
        </div>
    );
}

export default ProductInspection;
