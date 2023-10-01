'use client'
import React, { useState } from 'react'


const AddUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState("");
    const [email, setEmail] = useState('');
    const SubmitUser = async () => {
        let response = await fetch('http://localhost:3000/api/users', {
            method: "POST",
            body: JSON.stringify({ name, age, email })
        });
        response = await response.json();
        if (response.success) {
            alert("new user added")
        } else {
            alert("some error with data please check")
        }
        console.log(response)
    }
    return (
        <div>
            <h1>Add User</h1>
            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="number" placeholder='age' onChange={(e) => setAge(e.target.value)} />
            <br />
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <br />
            <button onClick={SubmitUser}>Add User</button>
        </div>
    )
}

export default AddUser