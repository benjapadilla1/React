import React from 'react'
import Cuenta from "./ItemCount"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ItemDetail = ({ props }) => {
    const [carrito, setCarrito] = useState(false)
    const onAdd = (q) => {
        setCarrito(true)
        console.log(`Añadiste ${q} cantidades al carrito`)
    }
    return (
        <>
            <div className='Card'>
                <h4 className='card-tilte'>{props.title}</h4>
                <img src={props.image} className="foto" alt='Item' />
                <p>Precio: ${props.price}</p>
                <p>Medidas: {props.medidas}</p>
                {
                    carrito
                        ? <Link to="/cart">Terminar compra</Link>
                        : <Cuenta stock={5} onAdd={onAdd} />
                }
            </div>
            <Link to={`/`} >
                <button className="btn btn-dark">
                    Volver
                </button>
            </Link>
        </>
    )
}

export default ItemDetail