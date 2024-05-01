'use client'
import { createContext , useContext, useReducer } from "react";
import { APIContext } from "@/store/api-context";

 export const CartContext =createContext( {
items : [],
addItemToCart:() => {},
updateItemQuantity:()=>{},

});

export default function CartContextProvider({children}){
  const { allShoes} =useContext(APIContext);
{/* The reducer function takes the current state and an action as arguments, and returns the new state based on the action type. */}
  const shopingCartReducer = (state,action)=>{

    if(action.type ==='ADD_ITEM'){
      const updatedItems = [...state.items];
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload,
      );
      const existingCartItem = updatedItems[existingCartItemIndex];
  
      if (existingCartItem) {
  
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = allShoes.find((product) => product.id === action.payload);
         updatedItems.push({
          id:  action.payload,
          name: product.category,
          price: product.price,
          Image:product.image,
          quantity: 1,
        });
      }
  
      return {
        ...state,
        items: updatedItems,
      };
      
    }
  
    if(action.type==='UPDATE_ITEM'){
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );
  
      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };
  
      updatedItem.quantity += action.payload.amount;
  
      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }
  
      return {
        ...state,
        items: updatedItems,
      };
    }
    return state;
    
  
  }


  {/*The useReducer hook takes in a reducer function and an initial state, and returns the current state and a dispatch function.  */}
  const [shonpigCardState,shopingCardDispatch] = useReducer(shopingCartReducer ,{
    items: [],
  })

      function handleAddItemToCart(id) {
        shopingCardDispatch({
          type:'ADD_ITEM',
          payload:id
        }) ;
      }
      function handleUpdateCartItemQuantity(productId, amount) {
      shopingCardDispatch({
        type:'UPDATE_ITEM',
        payload: { productId ,  amount}
      
      })
      }
    
      const ctxValue = {
        items : shonpigCardState.items,
        addItemToCart:handleAddItemToCart,
        updateItemQuantity:handleUpdateCartItemQuantity
      };
      
return<CartContext.Provider value={ctxValue}>
{children}
</CartContext.Provider>
}