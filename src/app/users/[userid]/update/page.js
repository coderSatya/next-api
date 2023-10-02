"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Update = ({ params }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      await axios
        .get(`http://localhost:3000/api/users/${params.userid}`)
        .then((res) => {
          console.log(res.data.result, "aa");
          setName(res.data.result.name);
          setAge(res.data.result.age);
          setEmail(res.data.result.email);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchApi();
  }, []);
  const UpdateUser = async () => {
    console.log(name, age, email);
    let result = await fetch(
      `http://localhost:3000/api/users/${params.userid}`,
      {
        method: "PUT",
        body: JSON.stringify({ name, age, email }),
      }
    );
    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("User Updated");
    } else {
      alert("Please try with");
    }
  };
  return (
    <div>
      <h1>Update User</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter age"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button onClick={UpdateUser}>Update User</button>
    </div>
  );
};

export default Update;
