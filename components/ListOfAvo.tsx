import React, { useState } from "react";
import { Avocado } from "./SVGIcons";
import Link from "next/link";
import { useProduct } from "@/hook/useProduct";
import CardAvo from "./CardAvo";

function ListOfAvo(): JSX.Element {

  const { avos } = useProduct(null)
  return (
    <div className="container mx-auto p-5 items-center flex flex-col gap-5">
      <h1 className="flex items-center text-4xl font-bold">
        Avo <Avocado /> Store
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {avos.map((product: TProduct) => (
          <CardAvo key={product.id} product={product} />
        ))}
      </div>
    </div>

  );
}

export default ListOfAvo;
