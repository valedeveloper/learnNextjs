import React, { useState } from "react";
import { Avocado } from "./SVGIcons";
import Link from "next/link";
import { useProduct } from "@/hook/useProduct";

function ListOfAvo(): JSX.Element {

  const { avos } = useProduct()
  return (
    <div className="container mx-auto p-5 items-center flex flex-col gap-5 ">
      <h1 className="flex items-center text-4xl font-bold">
        Avo <Avocado /> Store
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        {avos.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}  >
            <div className=" shadow-lg p-3 font-bold">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <span>{product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ListOfAvo;
