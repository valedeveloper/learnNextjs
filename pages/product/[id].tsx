import { useProduct } from "@/hook/useProduct"
import React from 'react'
import { useRouter } from "next/router"
import Spinner from "@/components/Spinner/Spinner"
//path alias

function DescriptionProduct(): JSX.Element {
    const router = useRouter()
    const { avo, isLoading } = useProduct(router.query.id as string)

    return (
        <>
            {
                isLoading ? <Spinner /> :
                    <>:
                        <div className="h-full flex flex-col items-center lg:flex-row">
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