import { useState } from "react"
import './App.css';

function Create(){
    let [state,setstate]=useState("hide");
    let[username ,setusername]=useState("")
    let[Email,setEmail]=useState("")
    let[password,setpassword]=useState("")
    let[arr,setarr]=useState([])

    function add(){
        let obj={
            username,
            Email,
            password
        }
        setarr([...arr,obj])
        console.log(arr);

    }
    return(
        <div className="container">
           <div className="form-card">
        {state=="hide"?(
            
            <div>
            <h2>login</h2>
          
            <input type="text" placeholder="Email" /> <br />
            <input type="text" placeholder="password" /> <br />

            <button className="btn" type="button">
              Login
            </button>
            <p onClick={() => setstate("show")}>create a sign up</p>
        </div>):( 
            <div>
            
              <h2>sign up</h2>
              <input type="text" placeholder="username" onChange={(e)=>setusername(e.target.value)}/> <br />
              <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /> <br />
              <input type="text"placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/> <br />
              <button onClick={add} className="btn">Submit</button>
              <p onClick={() => setstate("hide")}>create a account </p>
            
            </div>)};
            </div>    
            </div>
          
    )
}

export default Create;