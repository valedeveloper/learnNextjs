import React, { createContext, useReducer } from 'react'
import { cartReducer } from '../reducer/cartReducer';

type LayoutProps = {
    children?: React.ReactNode
}
export const CartContext = createContext(null)
const initialState:string | null = JSON.parse(window.localStorage.getItem("cart")) || {
    productInCart: [],
  };



function CartProvider({ children }: LayoutProps) {
    const [state, dispatch] = useReducer(cartReducer, initialState)


    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider