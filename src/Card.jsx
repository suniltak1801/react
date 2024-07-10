import React from "react";
import "./App.css";
function Card({ name, price, detail, image }) {
  return (
    <>
        <div className="cart-item">
          <img src={image} alt="Product Name" />
          <div className="cart-item-details">
            <h3>{name}</h3>
            <p>{detail}</p>
            <p className="price">{price}</p>
            <button className="remove-item">see more</button>
          </div>
        </div>
    </>
  );
}

// export default Card;

// import React, { useState } from 'react'

// const Card = () => {
//     // let a =2;
//     // let b =3;
//     // console.log("sum=" a+b
//     // );
//     const [a,seta] = useState(2)

//     seta(3)
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Card
