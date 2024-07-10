import React from 'react'

function AddCart({cart}) {
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
