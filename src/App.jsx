import React from "react";
import "./App.css";
// import Card from "./Card";

function App() {
  C:\Users\Sunil Tak\Desktop\REACT\introduction\src\App.jsx

  const product = [
    {
      id : 1,
      name : 'shoes',
      detail : 'dknacnadonhasosfaoifh',
      price : '600',
      image : 'https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg'
    },

    {
      id : 2,
      name : 'shoes',
      detail : 'dknacnadonhasosfaoifh',
      price : '600',
      image : 'https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg'
    },

    {
      id : 3,
      name : 'shoes',
      detail : 'dknacnadonhasosfaoifh',
      price : '600',
      image : 'https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg'
    },

    {
      id : 4,
      name : 'shodfbfbbfbfbfbhes',
      detail : 'dknacnadonhasosfaoifh',
      price : '6077770',
      image : 'https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_1280.jpg'
    },
   ]
  return (
    // <>
    //    {/* <div className="main">
    //     <Card
    //       name={"shoes"}
    //       detail={"dknacnadonhasosfaoifh"}
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
    // </>

  

    <>

    {
      product.map((i) => (

          <div key={i.id}>

            <img src={i.image} alt="" />
            <h1>{i.name}</h1>
            <h3>{i.price}</h3>
            <p>{i.detail}</p>

          </div>
      ))
    }

    
    
    
    </>
  );
}


export default App;