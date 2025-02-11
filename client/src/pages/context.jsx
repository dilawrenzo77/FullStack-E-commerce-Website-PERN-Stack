import { React, createContext, useState, useEffect} from "react";
import axios from "axios";

export const ProductContext = createContext(null);


export const ProductContextProvider =  (props) => {
    const [products, setProducts] = useState();
    const [allProducts, setAllProducts] = useState();


    useEffect(() => {
        async function fetchProduct() {
            try{
                const result = await axios.get("http://localhost:3000/");
                const ourProduct = result.data;
                setProducts(ourProduct);
            
            }catch(err) {
                console.log("we encountered an error", err.stack);
                
            }
        }
        fetchProduct();
    }, []);
    
    useEffect(() => {
        async function fetchAllProduct() {
            try{
                const result = await axios.get("http://localhost:3000/allProducts");
                const allProducts = result.data;
                setAllProducts(allProducts);
            
            }catch(err) {
                console.log("we encountered an error", err.stack);
                
            }
        }
        fetchAllProduct();
    }, []);

        //Cart Functionality
        const [cartItems, setCartItems] = useState([]);


        //THIS SNIPPET OF ADDING TO CART WORKS BUT IT ADDS ALL THE ITEMS AND DOESNT HANDLE DUPLICATE ITEMS
        //SO EACH ITEM WILL BE ADDED THE AMOUNT OF TIMES IT WAS CLICK AND DISPLAYED.
        // const addToCart = (product) => {
        //     setCartItems([...cartItems,product])
        // };

        const addToCart = (product) => {
            const existingItems = cartItems.find((item) => item.product_id === product.product_id);
            if(existingItems){
                setCartItems(
                    cartItems.map((item) => item.product_id === product.product_id ? {...item, quantity: item.quantity + 1 } : item)
                )
            }else{
                setCartItems([...cartItems, {...product, quantity: 1}])
            }
        }

        const removeFromCart = (product) => {
            const existingItems = cartItems.find((item) => item.product_id === product.product_id);
            if(existingItems.quantity === 1){
                setCartItems(cartItems.filter((cartItem) => cartItem.product_id !== product.product_id))
            }else{
                setCartItems(cartItems.map((cartItem) => cartItem.product_id === product.product_id 
                ? {...cartItem, quantity: cartItem.quantity - 1 }: cartItem))
            }
        }
        

        const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        const totalCartAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

        const clearCart = () => {
            setCartItems([]);
        }


        //console.log("e don dey work oooo",cartItems);
        // console.log("for total",totalCartItems);

   

    const contextValue = { products, allProducts, cartItems, addToCart, removeFromCart, totalCartItems, clearCart, totalCartAmount};
    
    return (<ProductContext.Provider value={contextValue}>{props.children}</ProductContext.Provider>)
};