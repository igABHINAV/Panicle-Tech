// Card.js
import React from "react";

const Card = ({ user }) => {
  if (!user) return null;
  const deleteUser = async () => {
    try {
      let res = await fetch(`http://localhost:5000/delete/${user._id}`, {
        method: "DELETE",
      });
  
      if (res.ok) {
        alert("User deleted successfully");
      } else {
        console.error("Failed to delete user");
        
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  
  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.position}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{user.department}</li>
        <li className="list-group-item">
          Age: {user.age}, Salary: {user.salary}
        </li>
        {/* Add more details as needed */}
        <li className="list-group-item">User ID : {user._id}</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-danger" onClick={deleteUser}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
