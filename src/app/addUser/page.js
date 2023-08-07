"use client"
import { useState } from "react"
import "../../style.css"
export default function page () {
    const [name,setName] = useState("");
    const [age,setAge]   = useState("");
    const [email,setEmail] = useState("");

    const addUser = async ()=>{
        // console.log(name,age,email);
        let response = await fetch("http://localhost:3000/api/users",{
            method:"Post",
            body:JSON.stringify({name,age,email})
        });
        response = await response.json();
        //console.log(response);
        if(response.success)
        {
          alert("User created!");
        }else{
            alert("Something is going to be wrong! Please try again.");
        }

    } 
    return (
        <div className="add-user">
            <h1>Add User</h1>
            <div>
                <label>Name:</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}  placeholder="Enter your name" className="input-field"/>
            </div>
            <div>
                <label>Age:</label>
                <input type="text" onChange={(e)=>setAge(e.target.value)}  placeholder="Enter your age" className="input-field"/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your email" className="input-field"/>
            </div>
            <div>
                <button  className="btn" onClick={addUser}>Add User</button>
            </div>
        </div>
    )
}