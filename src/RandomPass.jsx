// import React, { useState } from 'react'

// function RandomPass() {

//     const [long, setLong] = useState(6)
//     const [numberAllow, setNumberAllow] = useState(false)
//     const [CharAllow, setCharAllow] = useState(false)
//     const [password, setPassword] = useState("")
//     const [ShowHide, setShowHide] = useState(false)

   
//     function RaPassword() {
        
//         let str = 'kshfsofsovnsofhsovnsovhWOFJSOVDOBHSVHDOBNDSOVHSOGV'
//         let pass = ''

//         if(numberAllow){
//             str += '1234567890'
//         }

//         if(CharAllow){
//             str += '@#$%&*}{?'
//         }

//         for(let i=0; i<long; i++){
//             let store =  Math.floor(Math.random() * str.length)
//             pass += str[store]
//         }
//         setPassword(pass)
//     }


//     const numchange=()=>{
//         setNumberAllow(!numberAllow)
//     }
//     // console.log(password);
//   return (
//     <div>
//         --  
//         <input type="text" value={password}  />
//         <button onClick={RaPassword}> generate password</button>
//         <input type="checkbox" checked={numberAllow} onChange={numchange}/>
//         <button onClick={!ShowHide}>{!setShowHide}</button>

        
//     </div>
//   )
// }

// export default RandomPass
