import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Count from "./Count";
import Navbar from "./Navbar";
import Login from "./Login";
import "./Navbar.css";
import "./Login.css"
import Footer from "./Footer";
// import RandomPass from "./RandomPass";
import AddCart from "./AddCart";
import { useEffect } from "react";


function App() {
  


  // const product = [
  //   {
  //     id: 1,
  //     name: "shoes",
  //     detail: "dTrendy & Stylish Casual Shoes Sneakers For Men  (White, Blue)",
  //     price: "600",
  //     image:
  //       "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg",
  //   },

  //   {
  //     id: 2,
  //     name: "shoes",
  //     detail: "dTrendy & Stylish Casual Shoes Sneakers For Men  (White, Blue)",
  //     price: "620",
  //     image:
  //       "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg",
  //   },

  //   {
  //     id: 3,
  //     name: "shoes",
  //     detail: "dTrendy & Stylish Casual Shoes Sneakers For Men  (White, Blue)",
  //     price: "680",
  //     image:
  //       "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg",
  //   },

  //   {
  //     id: 4,
  //     name: "shoes",
  //     detail: "dTrendy & Stylish Casual Shoes Sneakers For Men  (White, Blue)",
  //     price: "640",
  //     image:
  //       "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "shoes",
  //     detail: "dTrendy & Stylish Casual Shoes Sneakers For Men  (White, Blue)",
  //     price: "770",
  //     image:
  //       "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg",
  //   },
  //   {
  //     id: 6,
  //     name: "shoes",
  //     detail: "dTrendy & Stylish Casual Shoes Sneakers For Men  (White, Blue)",
  //     price: "770",
  //     image:
  //       "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg",
  //   },
  //   {
  //     id: 7,
  //     name: "sports shoes",
  //     detail: "dTrendy & Stylish Casual Shoes Sneakers For Men  (White, Blue)",
  //     price: "470",
  //     image:
  //       "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg",
  //   },
  //   {
  //     id: 8,
  //     name: "shoes",
  //     detail: "dTrendy & Stylish Casual Shoes Sneakers For Men  (White, Blue)",
  //     price: "570",
  //     image:
  //       "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg",
  //   },
  //   {
  //     id: 9,
  //     name: "stylish shoes",
  //     detail: "dTrendy & Stylish Casual Shoes Sneakers For Men  (White, Blue)",
  //     price: "970",
  //     image:
  //       "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg",
  //   },
  // ];
 
  // const [product, setProduct] = useState([])


  //  async function productGet() {
  //  await fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //   .then(json=>setProduct(json))
    
  // }
  // console.log(product);

  // useEffect(() => {
  //   productGet()
  // })


  return (
    <>
      <Router>
        <Navbar />
        {/* <RandomPass/> */}

        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/" element={<Count />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/addcart" element={<AddCart/>}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;

// <>
//    {/* <div className="main">
//     <Card
//       name={"shoes"}
//       detail={"dTrendy & Stylish Casual Shoes Sneakers For Men  (White, Blue)"}
//       price={"600"}
//       image={
//         "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg"
//       }
//     />

//     <Card
//       name={"shdbxdbzx"}
//       detail={"dknacnadocb xbxbxbxbnhasosfaoifh"}
//       price={"2786"}
//       image={
//         "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg"
//       }
//     />
//     <Card
//       name={"shdbxdbzx"}
//       detail={"dknacnadocb xbxbxbxbnhasosfaoifh"}
//       price={"27855556"}
//       image={
//         "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg"
//       }
//     />
//   </div> */}

//   {/* {

//     product.map((i) => (
//       <div key={i.id}>
//          <Card
//          name={i.name}
//          detail={i.detail}
//          price={i.price}
//          image={i.image}
//          />
//       </div>

//     ))
//   }  */}
// </>1
