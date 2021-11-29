import React,{useState} from 'react'
import axios from "axios"

import {BsFillPersonFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {AiFillPhone} from "react-icons/ai" 
import {RiLockPasswordFill} from "react-icons/ri" 
import { FaAddressCard } from 'react-icons/fa'
import "./AdminRegister.css"

import {Link,  useHistory} from "react-router-dom"

function Rsgister() {

  const history = useHistory();

    function adduser(){
        axios.post("http://localhost:8000/user/add",{
        
          "name":reg_name,
          "username":reg_username,
          "password":reg_password,
          "email":reg_email,
          "address":reg_address,
          "hp":reg_hp
        
      }).then(res=>{
        
          alert(res.data);
          history.push("/login");
          
      })
      .catch(err=>{
        alert(err);
        
      })

    }

    
      
    var [reg_email,setRegEmail]=useState("");
    var [reg_password,setRegPassword]=useState("");
    var [reg_username,setRegUserName]=useState("");  
    var [reg_name,setRegName]=useState("");
    var [reg_address,setRegAddress]=useState("");
    var [reg_hp,setRegHp]=useState("");
          
        
    return (
        
        <div  className="registerBox" style={{width:"auto 50%"}}>
              
        <div className="register">   
        
         <h2 style={{fontSize:"30px",textAlign:"center",marginBottom:"10px",color:"white"
        ,fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>Register</h2>
          <div className="registerInputs">
          <label for="name" className="label" style={{color:"black",fontSize:"18px",fontWeight:"500"}} ><BsFillPersonFill /> name</label>
         <input  type="text" className="input" id="username" onChange={(e)=>{setRegName(e.target.value)}}/>
         <label for="username" className="label" style={{color:"black",fontSize:"18px",fontWeight:"500"}} ><BsFillPersonFill /> Username</label>
         <input  type="text" className="input" id="username" onChange={(e)=>{setRegUserName(e.target.value)}}/>
         <label for="email" className="label" style={{color:"black",fontSize:"18px",fontWeight:"500"}}> <MdEmail /> Email Address</label>
        <input id="email" type="email" className="input" onChange={(e)=>{setRegEmail(e.target.value)}}/>
        <label style={{color:"black",fontSize:"18px",fontWeight:"500"}} for="phone" className="label"><AiFillPhone /> HP</label>
        <input id="phone" type="number" className="input" data-type="password" onChange={(e)=>{setRegHp(e.target.value)}}/>
        <label for="username" className="label" style={{color:"black",fontSize:"18px",fontWeight:"500"}} ><FaAddressCard /> Address</label>
         <input  type="text" className="input" id="username" onChange={(e)=>{setRegName(e.target.value)}}/>
    
        <label style={{color:"black",fontSize:"18px",fontWeight:"500"}} for="password" className="label"> <RiLockPasswordFill />Password</label>
        <input id="password" type="password" className="input" data-type="password" onChange={(e)=>{setRegPassword(e.target.value)}}/>
    

        <input type="submit" className="button" value="Sign Up" onClick={adduser}/>


        <Link to="/" class="signin">
      
      Already Member?

</Link>

          </div>
        
    
               </div>
               </div>



    )
}

export default Rsgister
