import React, {useState, useEffect} from "react";
 export const context =  React.createContext()

export function Provider({children}){

    //..............................................................
    const [product, setProduct] = useState([])
    async function productGet() {
    await fetch('https://fakestoreapi.com/products')
     .then(res=>res.json())
     .then(json=>setProduct(json))
     
   }
   console.log(product);
 
   useEffect(() => {
     productGet()
   })
//..............................................................

const [cart, setCart] = useState([])

function addtocart(product2) {   
  setCart([...cart, product2])
}

//..................................................................

   return(
    <>
    <context.Provider value={{product, cart , addtocart}}>
     {children}
    </context.Provider>

    
    </>
   )
 
  }

  

