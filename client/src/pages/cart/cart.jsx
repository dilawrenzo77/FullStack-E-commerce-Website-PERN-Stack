import React, {useContext} from 'react';
import "./cart.css";
import { ProductContext } from "../../pages/context";
import { TbShoppingCartCancel } from "react-icons/tb";
import Footer from "../../components/footer/footer";
import ProductInspection from '../../components/productInspection/productInspection';

const Cart = () => {
    const { cartItems } = useContext(ProductContext);
    console.log(cartItems);
    return (
        <div className='cartContent'>
            <h1 className="cartItems">Our Cart</h1>
            {cartItems.length < 1 ? <div className="noCartContent">
                <TbShoppingCartCancel className='cancelIcon' size={200}/>
                <h1>Sorry You do not have any item in your cart</h1>
            </div>: cartItems.map((item) => {
                return (
                        <ProductInspection key={item.name} data={item}/>
                )
            }) }
            <Footer />
        </div>
    );
}

export default Cart;
