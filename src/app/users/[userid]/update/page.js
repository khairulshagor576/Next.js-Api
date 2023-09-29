"use client"
import { useEffect, useState } from "react";
import "../../../../style.css"
export default function Page ({params}) 
{
    let id = params.userid; 
    const [name,setName]   = useState("");
    const [age,setAge]     = useState("");
    const [email,setEmail]    = useState("");

    useEffect(()=>{
        getUserDetails();
    },[]);

     const getUserDetails = async () =>
     {
        const response = await fetch (`http://localhost:3000/api/users/${id}`);
        const data = await response.json();
        //console.log(data);
        setName(data.result.name);
        setAge(data.result.age);
        setEmail(data.result.email);
    }

    const updateUser = async () =>{

        const result = await fetch (`http://localhost:3000/api/users/${id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name,age,email})});

        const data = await result.json()
         //console.log(data);
         if(data.success)
         {
            alert("User Information Updated!");
         }else{
            alert("Please try age with valid result!");
         }
    }

    return (
        <div className="add-user">
            <h1>Update User Details</h1>
            <input type="text" defaultValue={name} name="name" placeholder="Enter your name" className="input-field" onChange={(e)=>{setName(e.target.value)}}/><br/>
            <input type="text" defaultValue={age} name="age" placeholder="Enter your age" className="input-field" onChange={(e)=>{setAge(e.target.value)}}/><br/>
            <input type="text" defaultValue={email} name="email" placeholder="Enter your email" className="input-field" onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <button className="btn" onClick={updateUser}>Update</button>
        </div>
    )
}