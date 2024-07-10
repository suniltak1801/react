import React, {useState} from 'react'

function Count() {

     // value // function  = useState()

     const [count, setCount] = useState(5)

     const   increment = () => {
      if (count<5) {
         setCount(count + 1)
      }
      else{
         setCount(0 )
      }
        
     }

     const decrement = () => {
      if (count>0) {
         setCount(count - 1)
      }
       else {
         setCount(5)
       }
     }

  return (
   <>
   <div className='cart'>
   <button className='btn-cart' onClick={increment}>increment +</button>
   <h1>{count}</h1>
   <button className='btn-cart' onClick={decrement}>decrement -</button>
   </div>

   
   

   </>
  )
}

export default Count
