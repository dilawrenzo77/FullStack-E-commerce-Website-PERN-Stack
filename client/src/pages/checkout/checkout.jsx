import React, {useContext} from 'react';
import {ProductContext} from "../../pages/context";
import "./checkout.css";
import Footer from "../../components/footer/footer";
import { Link } from 'react-router-dom';

const Checkout = () => {
    const {cartItems, totalCartItems, totalCartAmount, clearCart} = useContext(ProductContext);
    return (
        <div className='checkOutContent'>
            <h1 className="checkOut">Product CheckOut</h1>
            <div className="pricing">
                <h2 className="productSummary">Product Summary</h2>
                <table className="pricingTable">
                    <tr>
                        <th>Item Id</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price per Item(&#8358;)</th>
                        <th>VAT(0%)</th>
                        <th>Total per Item (&#8358;)</th>
                    </tr>
                    <tbody>
                        {cartItems.map((item) => {
                            return(<tr>
                                <td>{item.product_id}</td><td>{item.name}</td><td>{item.quantity}</td><td>{item.price}</td><td>{0}</td><td>{item.price * item.quantity}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
                <div className='priceSummary'>
                    <h3>Total items: <br />{totalCartItems}</h3>
                    <h3>Total Amount(&#8358;): <br />{totalCartAmount}</h3>
                </div>
                <button className="clearCart" onClick={() => clearCart()}>ClearCart</button>
                <div className="confirmationBtn">
                    <Link to="/catalog"><button className="continueBtn">Continue Shopping</button></Link>
                    <Link to="/confirm"><button className="confirmBtn">Confirm</button></Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Checkout;


