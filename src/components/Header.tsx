"use client"
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'
import cart from '../../public/images/icon-cart.svg'
import User from '../../public/images/image-avatar.png'
import Cart from './Cart'
import { GlobalContext } from './Global'
import Menu from './Menu'


const Header = () => {
    //Gerar contexto pra passar os itens do carrinho
    const [cartOpen, setCartOpen] = useState(false)
    const {item, setItem} = useContext(GlobalContext);
    const {mobile} = useContext(GlobalContext)
    
    const verifyCart = () =>{
        if(cartOpen){
            setCartOpen(false)
        }else if(!cartOpen){
            setCartOpen(true)
        }
    }

  return (

        <nav className={
            mobile?
            'flex justify-between items-center w-full py-5 max-w-screen  font-kulim text-gray border-b-2 border-[#E8E7EC]'
            :
            'flex justify-between items-center w-full max-w-screen  font-kulim text-gray border-b-2 border-[#E8E7EC]'
        }>
            <div className='flex gap-14 items-center justify-center'>
                {mobile ? 
                <>
                    <Menu/>
                    <Image src={Logo} alt='sneakers'height={20}/>         
                </>   
                :
                <>
                    <Image src={Logo} alt='sneakers' />
                    <Menu/>
                </> 
                } 
            </div>
            <div className='flex gap-6 items-center'>
                <div className='relative '>
                <button className="relative bg-none border-none cursor-pointer">
                <div className="relative inline-block" onClick={verifyCart}>
                    <Image alt="Cart" src={cart} />
                    {1 > 0 ? (
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-orange1 text-white text-start rounded-full px-[3px] text-[10px]">
                        {item.amount}
                    </span>
                    ) : null}
                </div>
                </button>
                    {cartOpen&&<Cart seq={1} image={item.image} countItem={item.amount} name={item.name} price={item.price}/>}
                </div>           
                <Image className='rounded-full cursor-pointer mr-5 border-2 border-transparent hover:border-orange1' alt='User' src={User} width={ 48} height={ 48}/>       
            </div>
           
        </nav>
   
  )
}

export default Header
