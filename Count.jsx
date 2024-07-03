import React, {useState} from 'react'

function Count() {

     // value // function  = useState()

     const [count, setCount] = useState(5)

     const   inc = () => {
        setCount(count + 1)
     }

     const dec = () => {
        setCount(count - 1)
     }

  return (
   <>
   <button onClick={inc}>inc</button>
   <h1>{count}</h1>
   <button onClick={dec}>dec</button>
   
   </>
  )
}

export default Count
