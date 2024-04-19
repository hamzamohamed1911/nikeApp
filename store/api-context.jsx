'use client'
import { createContext ,useState } from "react";

 export const APIContext =createContext( {   fetchShoes:()=>{} ,allShoes:[]});

export default function APIContextProvider({children}){

    const [allShoes,setAllShoes]=useState([]);
      const fetchShoes = async({ limit})=>{
    
        const url = `https://fakestoreapi.com/products?limit=${limit}`;
        const response  =await fetch(url);
        const data = await response.json();
        setAllShoes(data)
}

    
      const ctxValue = {
        fetchShoes,
        allShoes
      };
      
return<APIContext.Provider value={ctxValue}>
{children}
</APIContext.Provider>
}