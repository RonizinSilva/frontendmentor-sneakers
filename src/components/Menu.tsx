import React, { useContext, useState } from 'react'
import Image from 'next/image'
import menu from '../../public/images/icon-menu.svg'
import close from '../../public/images/icon-close.svg'
import { GlobalContext } from './Global'
import Modal from './Modal'


const Menu = () => {
    const [menuActive, setMenuActive] = useState(false);
    const {mobile, sizeScreen} = useContext(GlobalContext);

    const altButton = () =>{
        if(menuActive){
            setMenuActive(false)
            console.log(sizeScreen)
            
        }else{
            setMenuActive(true)
           
        }
    }
  return (
    <>
        {mobile ? 
       <div className='relative'>
            <button className='ml-6 z-20' onClick={altButton}>
                <Image alt='Menu' src={menu}/>
            </button>
           {menuActive
            ?
            <Modal onClick={altButton}>
           <ul className={`${menuActive ? 'flex flex-col px-6 gap-8 absolute h-screen z-10 top-0 left-0 w-[80%] px bg-[#FFF] ' : 'hidden flex-col py-5 gap-8'}`}>
                <Image className='py-8 right-0' alt='Menu' src={close} onClick={altButton}/>
                <li className='font-bold text-black'>Colletions</li>
                <li className='font-bold text-black'>Man</li>
                <li className='font-bold text-black'>Woman</li>
                <li className='font-bold text-black'>About</li>
                <li className='font-bold text-black'>Contact</li>
            </ul>    
           </Modal>
           : null}

       </div>
        : 
        <ul className='flex gap-8'>
            <li className='cursor-pointer h-full border-b-4 border-transparent py-8 hover:border-orange1'>Colletions</li>
            <li className='cursor-pointer h-full border-b-4 border-transparent py-8 hover:border-orange1'>Man</li>
            <li className='cursor-pointer h-full border-b-4 border-transparent py-8 hover:border-orange1'>Woman</li>
            <li className='cursor-pointer h-full border-b-4 border-transparent py-8 hover:border-orange1'>About</li>
            <li className='cursor-pointer h-full border-b-4 border-transparent py-8 hover:border-orange1'>Contact</li>
    </ul>    
        }
    </>
    
  )
}

export default Menu
