import React from "react";
import Button from "./Button";

const ProductCard = ({ imgsrc="https://s3.amazonaws.com/www-inside-design/uploads/2018/12/The-product-of-you-810x810.png", productName="Product Name", price="40", description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, diam ac rhoncus dapibus, tortor metus dignissim justo, non bibendum."}) => {
  return (
    <div className="product-card max-w-96 mx-auto">
      <div className="product-card__img relative pt-80">
        <img
          src={imgsrc}
          alt="Image Description"
          className="absolute inset-0 object-cover object-center w-full h-full"
        />
      </div>
      <div className="product-card__content mt-4">
        <div className="title flex justify-between items-center gap-4 mb-4">
            <a href="#" className="text-black dark:text-white dark:hover:text-purple-500"><h2 className="text-2xl font-bold">{productName}</h2></a>
            <span className="font-medium text-base text-purple-500">${parseFloat(price).toFixed(2)}</span>
        </div>
        <p className="mb-4">{description}</p>
        <Button btnText="Add to cart" />
      </div>
    </div>
  );
};

export default ProductCard;
