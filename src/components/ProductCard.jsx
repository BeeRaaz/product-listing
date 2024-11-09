import React, { useContext } from "react";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {

  return (
    <div className="product-card w-full max-w-96 mx-auto">
      <div className="product-card__img relative pt-80">
        <img
          src={data.imgsrc}
          alt="Image Description"
          className="absolute inset-0 object-cover object-center w-full h-full"
        />
      </div>
      <div className="product-card__content mt-4">
        <div className="title flex justify-between items-center gap-4 mb-4">
            <Link to={`/products/${data.id}`} className="text-black hover:text-purple-500 dark:text-white dark:hover:text-purple-500"><h2 className="text-2xl font-bold">{data.productName}</h2></Link>
            <span className="font-medium text-base text-purple-500">${parseFloat(data.price).toFixed(2)}</span>
        </div>
        <p className="mb-4">{data.description}</p>
          <CartButton
          btnText={"Add to cart"}
          />
      </div>
    </div>
  );
};

export default ProductCard;
