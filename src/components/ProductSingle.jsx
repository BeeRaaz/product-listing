import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../dummydata/products';
import CartButton from './CartButton';
import Header from './Header';

const ProductSingle = () => {

    const { id } = useParams();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <h1>No Product found</h1>;
    }

  return (
    <>
    <Header />
    <section className='py-10'>
        <div className="container">
            <h1 className='text-4xl font-bold mb-10'>{product.productName}</h1>
            <div className="grid gap-10 md:grid-cols-2">
                <div className="relative py-44 md:py-60">
                    <img className='absolute inset-0 object-cover object-center w-full h-full' src={product.imgsrc} alt="Image Description" />
                </div>
                <div>
                    <span className='block mb-2 text-purple-500 text-xl font-medium'>${product.price}</span>
                    <p className='mb-5'>{product.description}</p>
                    <CartButton btnText={"Add to Cart"} />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductSingle
