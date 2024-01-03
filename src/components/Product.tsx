"use client"
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import minus from '../../public/images/icon-minus.svg'
import plus from '../../public/images/icon-plus.svg'
import cart from '../../public/images/icon-cart-white.svg'
import Modal from './Modal'
import ProductView from './ProductView'
import Cart from './Cart'
import { GlobalContext } from './Global'

type Product = {
  collection: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  discount: number;
};

const products = [
  {
    product: '1',
    alt: 'product 1',
    thumb: '/images/image-product-1-thumbnail.jpg',
    image: '/images/image-product-1.jpg',
    colletion:'sneakers company'
  },
  {
    product: '2',
    alt: 'product 2',
    thumb: '/images/image-product-2-thumbnail.jpg',
    image: '/images/image-product-2.jpg',
    colletion:'sneakers company'
  },
  {
    product: '3',
    alt: 'product 3',
    thumb: '/images/image-product-3-thumbnail.jpg',
    image: '/images/image-product-3.jpg',
    colletion:'sneakers company'
  },
  {
    product: '4',
    alt: 'product 4',
    thumb: '/images/image-product-4-thumbnail.jpg',
    image: '/images/image-product-4.jpg',
    colletion:'sneakers company'
  },
]

const Product = () => {
  
  const [countProduct, setCountProduct] = useState(0);
  
  const [modal, setModal] = useState(false);

  const { item, setItem, mobile} = useContext(GlobalContext);


  function CalcDiscount(product: Product): Product {
    const difference = product.oldPrice - product.price;
    const discountPercentage = (difference / product.oldPrice) * 100;
    product.discount = discountPercentage;
  
    return product;
  }
  
const product: Product = {
        collection: 'sneakers company',
        name: 'Fall Limited Edition Sneakers',
        description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer',
        price: 125.00,
        oldPrice: 250.00,
        discount: 0,
};

const addToCart = ()=>{
  if(countProduct > 0 ){
    setItem({
      image: products[0].thumb,
      name: product.name,
      price: product.price,
      amount: countProduct
    })
  }else{
    alert("Selecione a quantidade que deseja")
  }
}

CalcDiscount(product);

  return (

    <div className={!modal ? 'overflow-hidden':''}>
    {modal? 
      <Modal onClick={()=>setModal(false)}>
      <ProductView 
          items={products}
          onClickPreview={()=>{}} 
          modal={true}
        />
      </Modal>
      :
      null
    }

    <div className={mobile ?`flex-col items-center max-w-screen justify-center`: 'flex mt-[92px]'}>

      <ProductView 
        items={products}
        onClickPreview={()=>setModal(true)} 
        modal={mobile ? true : false}
       />

      <div className={mobile?'flex flex-col  gap-5 p-5' :'flex flex-col  gap-5 py-[60px] ml-[126px]'}>
        <p className='text-orange1 uppercase font-amaranth font-bold tracking-[3px]'>{product.collection}</p>
        <h1 className='text-black font-kulim font-bold text-4xl'>{product.name}</h1>
        <p className='text-gray font-kulim'>{product.description}</p>
        <div className={mobile ? 'flex items-center justify-between': '' }>
        <div className='flex gap-4 items-center'>
          <p className='text-black text-3xl font-sans font-bold'>${product.price}</p>
          <p className='bg-[#F9F0E9] text-orange1 font-bold p-2 rounded-xl'>{product.discount}%</p>
        </div>
        <p className='text-gray line-through'>${product.oldPrice}</p>
        </div>
        

        <div className={mobile ? 'flex flex-col gap-4':'flex gap-4'}>
          <div className='flex gap-8 bg-[#F7F8FD] items-center justify-between rounded-xl py-5 px-4'>
            {countProduct === 0 ?
            <button className='disabled:'>
              <Image alt='delete' src={minus}/>
            </button>:
            <button onClick={()=> setCountProduct(countProduct - 1)}>
              <Image alt='delete' src={minus}/>
            </button>
            }
            <p>{countProduct}</p>
            <button onClick={()=> setCountProduct(countProduct + 1)}>
              <Image alt='add' src={plus}/>
            </button>
          </div>
          <button 
          className='flex gap-4 bg-orange1 hover:bg-orange-300 items-center justify-center text-white font-bold py-5 px-20 rounded-xl'
          onClick={addToCart}
          >
            <Image  alt='Cart' src={cart}/>
            Add to Cart
          </button>
          {/* <button onClick={()=>console.log(item)}>Teste</button> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Product
