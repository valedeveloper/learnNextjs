import React from 'react'

function Footer():JSX.Element {
  return (
    <footer className='flex p-5 justify-around shadow-lg'>
        <ul>
            <h2 className='font-bold'>Nosotros</h2>
            <li>Conoce más</li>
        </ul>
        <ul>
            <h2 className='font-bold'>Servicios</h2>
            <li>Todos los productos</li>
        </ul>
        <ul>
            <h2 className='font-bold'>Hecho por:</h2>
            <li>Valeria Jiménez Bedoya</li>
        </ul>
    </footer>
  )
}

export default Footer