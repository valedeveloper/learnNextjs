// Cart.js
import { useCart } from "@/hook/useCart";
import React, { useState } from "react";
import { getPriceProductsInCart } from "../utilities/getProductPrice";
import Link from "next/link";

const Cart = () => {
  const { state, clearProduct, addProduct, removeProduct,subtractProduct } = useCart();
  console.log("Payload", state);

  return (
    <div className="container mx-auto my-8  h-full ">
      <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
      {state.productInCart.length === 0 ? (
        <div className="text-center p-4 flex  flex-col items-center">
          <p className="text-lg font-bold mb-4">Tu carrito está vacío</p>
          <p className="text-gray-500">¡Agrega algunos productos para comenzar!</p>
          <Link href="/" ><p className="bg-green-500  p-2 text-white text-2xl m-2">¡Compra Ahora!</p></Link>
        </div>
      ) : (
        <div className="p-2">
          {state.productInCart.map((item: TProduct) => (
            <div
              key={item.id}
              className="flex items-center justify-between shadow-lg  "
            >

              <img src={item.image} alt={item.name} className=" w-[30%] " />

              <div>
                <p className="font-semibold">{item.name}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
              </div>
              <div className="flex items-center text-2xl">
                {
                  item.quantity > 0 ? <button className="text-green-600 mr-2" onClick={()=>subtractProduct(item)}>-</button> : null
                }
                <button
                  className="text-green-600 mr-2"
                  onClick={() => addProduct(item)}
                >
                  +
                </button>
              </div>
              <p className=" self-start p-5 cursor-pointer font-bold" onClick={() => removeProduct(item)}>X</p>
            </div>
          ))}
          <div className="mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 mr-4"
              onClick={clearProduct}
            >
              Limpiar Carrito
            </button>
            <p className="text-xl font-semibold">
              Total: ${getPriceProductsInCart(state.productInCart)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
