import React, { useContext } from "react";
import cart from "../assets/cart.svg";
import CartContext from "../context/CartContext";

const Cart = () => {

  const { noOfItemsInCart } = useContext(CartContext);

  return (
    <button className="w-12 h-12 bg-gray-400 rounded-full flex justify-center items-center relative">
      <span className="absolute -top-3 -right-3 bg-red-400 min-w-[60%] min-h-[60%] p-1 rounded-full flex justify-center items-center">
          {noOfItemsInCart}
      </span>
      <img className="w-[80%] h-[80%]" src={cart} alt="Cart" />
    </button>
  );
};

export default Cart;
