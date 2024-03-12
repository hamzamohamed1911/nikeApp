
import APIContextProvider from "./(store)/api-context";
import CartContextProvider from "./(store)/shopping-cart-context";

const layout = ({children})=>{
    return(<APIContextProvider>
          <CartContextProvider>
    
         {children} 
         </CartContextProvider>
         </APIContextProvider>)
}
export default layout;