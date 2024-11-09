import React, { useContext } from 'react'
import CartContext from '../context/CartContext';

const CartButton = ({ btnText }) => {

  const { CartUpdater } = useContext(CartContext);

  return (
    <button
    onClick={CartUpdater}
    className="bg-black text-white text-xl py-3 px-8 border border-black dark:bg-white dark:border-white dark:text-black hover:bg-transparent dark:hover:bg-transparent dark:hover:text-white hover:text-black rounded-md w-full md:w-fit transition-colors ease-linear duration-300">
      {btnText}
    </button>
  )
}

export default CartButton
