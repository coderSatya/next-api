import React from 'react'
async function getUsers(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
}

const page = async ({ params }) => {
    const user = await getUsers(params.userid);
    console.log(user);
    console.log(params, '8989')
    return (
        <div>
            <h2>User Details</h2>
            <h1>user: {user.name}</h1>

        </div>
    )
}

export default page