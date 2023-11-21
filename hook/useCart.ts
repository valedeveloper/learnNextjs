import { CartContext } from "@/store/CartProvider"
import {ACTIONCART} from '../reducer/typeAction';
import { useContext } from "react"

export const useCart=()=>{ 
    const {state,dispatch}=useContext(CartContext)

    const addProduct=(product:TProduct)=>{
        dispatch({
            type:ACTIONCART.add_to_cart,
            payload:product
        })
     }
    const subtractProduct=(product:TProduct)=>{
        dispatch({
            type:ACTIONCART.subtract_to_cart,
            payload:product
        })
     }
    const removeProduct=(product:TProduct)=>{
        dispatch({
            type:ACTIONCART.remove_to_cart,
            payload:product
        })
     }
    const clearProduct=()=>{
        dispatch({
            type:ACTIONCART.clear_cart
        })
     }

    return {
        addProduct,removeProduct,clearProduct,subtractProduct,state
    }
}