import React from 'react'
import ProductCard from './ProductCard'
import { products } from "../dummydata/products";

const ProductListing = () => {

  return (
    <section className='product-listing py-10'>
        <div className="container">
            <h1 className='text-3xl md:text-6xl md:mb-20 font-bold mb-10'>Please check out the products below</h1>
            <div className="grid gap-x-4 gap-y-10 md:grid-cols-3">
              {products.length > 0 && products.map((product) => <ProductCard data={product} key={product.id} />)}
                {/* <ProductCard />
                <ProductCard />
                <ProductCard /> */}
            </div>
        </div>
    </section>
  )
}

export default ProductListing
