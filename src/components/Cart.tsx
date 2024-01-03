import React, { useContext } from 'react'
import ItemCart from './ItemCart'
import { GlobalContext } from './Global'

const Cart = ({seq, name, price, image, countItem}) => {
  const {mobile, item} = useContext(GlobalContext);
   
  return (
    <div className=
    {
      mobile
        ?'absolute right-[-64px] top-16  bg-white w-[360px] min-h-[260px] shadow-2xl z-20 rounded-xl'
        :'absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white w-[360px] min-h-[260px] shadow-2xl z-20 rounded-xl'
    }
    >
    <div className='border-b-2 border-[#E8E7EC]'>
      <h1 className='font-kulim font-bold py-7 ml-7  text-black'>Cart</h1>
    </div>  

    {item.amount > 0 ?
    <div className='flex flex-col gap-7 py-7 px-7'>
    <ItemCart product={seq} name={name} price={price} image={image} countItem={countItem}/>
    <button  className=' bg-orange1 hover:bg-orange-300 items-center justify-center text-white font-bold py-4 w-full rounded-xl'>
      Checkout
    </button>

    </div>
    :
    <p className='text-center text-gray mt-8'>Carrinho vazio</p>
    }   
    
    </div>
  )
}

export default Cart
