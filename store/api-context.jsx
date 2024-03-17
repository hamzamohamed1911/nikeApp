'use client'
import { createContext ,useState } from "react";

 export const APIContext =createContext( {   fetchShoes:()=>{} ,allShoes:[]});

export default function APIContextProvider({children}){

    const [allShoes,setAllShoes]=useState([]);
      const fetchShoes = async({ limit})=>{
    
        const url = `https://fakestoreapi.com/products?limit=${limit}`;
      // const  headers= {
      //   'X-RapidAPI-Key': '6abf973a9cmsh3e2586939a274bbp127c26jsn8b70682c013e',
      //   'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
      //   }
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