import { CartContext } from "@/store/CartProvider"
import { useContext } from "react"

export const useCart=()=>{ 
    const {state,dispatch}=useContext(CartContext)

    const addProduct=()=>{ }
    const removeProduct=()=>{ }
    const clearProduct=()=>{ }

    return {
        addProduct,removeProduct,clearProduct,state
    }
}