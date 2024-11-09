import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // const [noOfItemsInCart, setNoOfItemsInCart] = useState(() => {
    //     const savedCount = localStorage.getItem("noOfItemsInCart");
    //     const parsedCount = savedCount ? parseInt(savedCount) : 0;
    //     return isNaN(parsedCount) ? 0 : parsedCount; 
    // });

    const [noOfItemsInCart, setNoOfItemsInCart] = useState(0);

    const CartUpdater = () => {
        setNoOfItemsInCart((prevNoOfItemsInCart) => prevNoOfItemsInCart + 1);
    }

    // useEffect(() => {
    //     localStorage.setItem("noOfItemsInCart", noOfItemsInCart);
    // }, [noOfItemsInCart]);

    return(
        <CartContext.Provider value={{ noOfItemsInCart, CartUpdater }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;