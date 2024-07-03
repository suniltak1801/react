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
            <div className='card-box'>
              <h1>{matchid.name}</h1>
            <h3>Price : {matchid.price}</h3>
            <p>{matchid.detail}</p> 
            <p className='free'>Free Delivery</p>
            <button className='btn-cart'>Buy Now</button>
            </div>
            </div>
      
    </div>
  )
}

export default Details
