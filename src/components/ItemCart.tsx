"use client"
import Image from 'next/image';
import React, { useContext } from 'react';
import trash from '../../public/images/icon-delete.svg'
import { GlobalContext } from './Global';


const ItemCart = ({product, image, name, price, countItem}) => {
    const result = price * countItem
    const {setItem} = useContext(GlobalContext);
  return (
    <div className='flex justify-between items-center '>
      <div className='flex gap-4'>
        <Image alt={product} src={image} width={50} height={50}/>
        <div className='flex-col gap-[14px]'>
            <p className='text-gray'>{name}</p>
            <div className='flex gap-[6px]'>
                <p className='text-gray font-sans'>${price}</p>
                <p className='text-gray font-sans'>x{countItem}</p>
                <p className='font-bold font-sans text-black'>${result}</p>
            </div>
        </div>
      </div>
      <button onClick={()=>setItem({})} ><Image alt='delete' src={trash}/></button>
    </div>
  )
}

export default ItemCart
