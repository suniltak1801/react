import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { context } from './context/ContextProvider.jsx';


function Home() {
  
  const {product} = useContext(context)
  console.log(product);
  return (
    <div className='container-cart'>

        {
            product.map((i) => (
                <div className='cart' key={i.id}>
                    <img src={i.image} alt="" />
                    <h1>{i.name}</h1>
                    <h3>Price : {i.price}</h3>
                    <h2>{i.detail}</h2>
                    <Link to={`/details/${i.id}`}><button className='btn-cart'>see more</button></Link>
                </div>
            ))

        }
      
    </div>
  )
}

export default Home
