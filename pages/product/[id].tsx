import React, { useEffect } from 'react'
import { useProduct } from "@/hook/useProduct"
import { useRouter } from "next/router"
import { useCart } from "@/hook/useCart"
import Spinner from "@/components/Spinner/Spinner"
//path alias

function DescriptionProduct(): JSX.Element {
    const router = useRouter()
    const { avo, isLoading } = useProduct(router.query.id as string)
    const { addProduct, removeProduct, state } = useCart()
     const checkProductInCart = (product) => {
        return state.productInCart.some((item) => item.id === product.id);
      };
      
    const isProductInCart = checkProductInCart(avo)
    return (
        <>
            {
                isLoading ? <Spinner /> :
                    <>:
                        <div className="h-full flex flex-col items-center lg:flex-row">
                            <img className="w-1/2" src={avo.image} alt="Bacon Avo" />
                            <div className="lg:w-1/2 space-y-2 p-5">
                                <h1 className="font-bold">{avo.name}</h1>
                                <p>{avo.price}</p>
                                <p className="bg-slate-300 w-max p-1 rounded-md text-sm">{avo.sku}</p>

                                {isProductInCart ? <button className="bg-red-500 border border-red-500 text-white p-1" onClick={() => removeProduct(avo)}>
                                    Eliminar del Carrito
                                </button> : <button className="bg-green-800 border border-green-800 text-white p-1" onClick={() => addProduct(avo)}>
                                    Agregar al Carrito
                                </button>}
                                <h3 className="font-bold">About this Avocado</h3>
                                <p className=" pb-5  border-b-2">
                                    {
                                        avo.attributes?.description
                                    }
                                </p>
                                <div className="max-w-screen-md mx-auto">
                                    <table className="w-full bg-white border border-gray-300 rounded-md overflow-hidden">
                                        <thead className="bg-gray-200 ">
                                            <tr>
                                                <th colspan="2" className="py-2 pl-4 text-left ">Attributes</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-left">
                                            <tr>
                                                <th className="py-2 pl-4 ">Shape</th>
                                                <td className="py-2 pl-4">{avo.attributes?.shape}</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2 pl-4">Hardiness</th>
                                                <td className="py-2 pl-4">{avo.attributes?.hardiness}</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2 pl-4">Taste</th>
                                                <td className="py-2 pl-4">{avo.attributes?.taste}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>

                    </>

            }
        </>
    )
}

export default DescriptionProduct