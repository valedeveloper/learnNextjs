import Link from 'next/link'
import React from 'react'

function CardAvo({product}:TProduct) {
  return (
    <Link href={`/product/${product.id}`} >
    <div className="shadow-lg p-3 font-bold transition-transform transform hover:scale-105">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <span>{product.price}</span>
    </div>
  </Link>
  )
}

export default CardAvo