"use client"
import React, { createContext, useEffect, useState } from "react";

interface GlobalContextProps {
  countItems: number;
  setCountItems: any;
  item: Item | any;
  setItem:any ;
  mobile: true | false;
  setMobile: any
  sizeScreen: any
}
type Item = {
  image: string;
  name: string;
  price: number;
  amount: number
};

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalStorage = ({ children }) => {
    const [countItems, setCountItems] = useState(0);
    const [mobile, setMobile] = useState(null);
    const [item, setItem] = useState({})

    const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setSizeScreen(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 

    useEffect(()=>{
      setItem({});
      function verifyScreen(){
        if(sizeScreen <= 600){
          setMobile(true)
        }else{
          setMobile(false);
        }
      }
      verifyScreen();
    },[sizeScreen])

    return (
        <GlobalContext.Provider
          value={{ countItems, setCountItems, item, setItem, mobile, setMobile, sizeScreen }}
        >
          {children}
        </GlobalContext.Provider>
      );
}
