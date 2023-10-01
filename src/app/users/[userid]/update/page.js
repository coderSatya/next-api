'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Update = ({ params }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');



    useEffect(() => {
        const fetchApi = async () => {
            await axios.get(`http://localhost:3000/api/users/${params.userid}`).then((res) => {
                console.log(res.data.result, 'aa')
                setName(res.data.result.name)
                setAge(res.data.result.age);
                setEmail(res.data.result.email)
            }).catch((err) => {
                console.log(err)
            })
        }
        fetchApi();

    }, [])
    return (
        <div>
            <h1>Update User</h1>
            <input type="text" value={name} onChange={(e) => (e.target.value)} placeholder='Enter name' />
            <input type="text" value={age} onChange={(e) => (e.target.value)} placeholder='Enter age' />
            <input type="text" value={email} onChange={(e) => (e.target.value)} placeholder='Enter email' />
            <button>Update User</button>
        </div>
    )
}

export default Update