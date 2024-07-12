import React from 'react'
import { useContext } from 'react'
import { context } from './context/ContextProvider.jsx'

function AddCart() {
    const {cart} = useContext(context)
    return (
        <>
            {
                cart.map((i) => (
                    <div key={i.id}>
                        <img src={i.image} alt="" />
                        <h1>{i.price}</h1>
                    </div>
                ))
            }
        </>
      )
}

export default AddCart
