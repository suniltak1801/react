import React from 'react'
import { Link, useParams } from 'react-router-dom';


function Details({product}) {

    const {id} = useParams()
    //id = 2

  const  matchid =  product.find((i) => i.id == id) // 2
//    console.log(matchid);


  return (
    <div className='container-cart-details'>

        <div className='cart-details' key={matchid.id}>
            <img src={matchid.image} alt="" />
            <h1>{matchid.name}</h1>
            <h3>Price : {matchid.price}</h3>
            <p>{matchid.detail}</p> 
            
            </div>
      
    </div>
  )
}

export default Details
