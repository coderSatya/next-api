"use client";
export default function DeleteUser({ id }) {
  console.log(id, "888");

  const deleteuser = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result.success) {
      alert("user deleted");
    }
  };
  return <button onClick={deleteuser}>Delete</button>;
}
