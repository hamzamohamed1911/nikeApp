import { useContext } from "react";
import { FaPlus,FaMinus  } from "react-icons/fa";
import { CartContext } from "../(store)/shopping-cart-context";

export default function Cart() {
  const {items ,updateItemQuantity} =useContext(CartContext);
 
    const totalPrice = items.reduce( (acc, item) => 
    acc + item.price * item.quantity, 0
    );
    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
  
    return (
      <div className="pb-10 pt-10">
        {items.length === 0 && <p>No items in cart!</p>}
        {items.length > 0 && (
          <ul className="space-y-7">
            {items.map((item) => {
              const formattedPrice = `$${item.price.toFixed(2)}`;
  
              return (
                <li className="flex justify-between bg-slate-300 rounded-md p-2"  key={item.id}>
                  <div className="text-xl">
                    <span>{item.name}</span>
                    <span> ({formattedPrice})</span>
                  </div>
                  
                  <p className="flex space-between  gap-2">
                    <button onClick={() => updateItemQuantity(item.id, -1)}>
                     <FaMinus className="w-3 h-3" />
                    </button>
                    <span className="text-xl">{item.quantity}</span>
                    <button onClick={() => updateItemQuantity(item.id, 1)}>
                      <FaPlus className="w-3 h-3"/>
                    </button>
                  </p>
                </li>
              );
            })}
          </ul>
        )}
           <hr className="h-px my-8 bg-coral-red border-0 dark:bg-coral-red "></hr>
        <div className=" gap-2  text-2xl flex justify-between font-bold pb-3 ">
          <h1>Cart Total:</h1>
         <div className="bold ">{formattedTotalPrice}</div>
        </div>
      </div>
    );
  }
  