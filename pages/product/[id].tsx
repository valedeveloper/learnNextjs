import { useProduct } from "@/hook/useProduct"
import Navbar from "../../components/Navbar"
import React from 'react'
import { useRouter } from "next/router"
import Spinner from "@/components/Spinner"


function DescriptionProduct(): JSX.Element {
    const router = useRouter()
    const { avo, isLoading } = useProduct(router.query.id as string)

    return (
        <>
            {
                isLoading ? <Spinner /> :
                    <div className="h-screen flex flex-col items-center lg:flex-row">
                        <img className="lg:w-1/2" src={avo.image} alt="Bacon Avo" />
                        <div className="lg:w-1/2 space-y-2 p-5">
                            <h1 className="font-bold">{avo.name}</h1>
                            <p>{avo.price}</p>
                            <p className="bg-slate-300 w-max p-1 rounded-md text-sm">{avo.sku}</p>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="number"
                                    min="1"
                                    pattern="\d+"
                                    className="border-black border p-1"
                                />
                                <button className="bg-green-800 border border-green-800 text-white p-1">
                                    Agregar al Carrito
                                </button>
                            </div>
                            <h3 className="font-bold">About this Avocado</h3>
                            <p>
                                {
                                    avo.attributes?.description
                                }
                            </p>
                        </div>
                    </div>



            }
        </>
    )
}

export default DescriptionProduct