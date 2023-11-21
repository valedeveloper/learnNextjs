import React, { createContext, useReducer } from 'react'
import { cartReducer,cartInitialState } from '../reducer/cartReducer';

type LayoutProps = {
    children?: React.ReactNode
}
export const CartContext = createContext()

function CartProvider({ children }: LayoutProps) {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)


    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider