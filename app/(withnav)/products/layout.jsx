
import CartContextProvider from "./(store)/shopping-cart-context";

const layout = ({children})=>{
    return(
          <CartContextProvider>
         {children} 
         </CartContextProvider>
         )
}
export default layout;