import React from "react";

const UserCard = ({ users, personal, handleSendEmail }) => {
  return (
    <div>
      <div>
        {users.map((item, index) => (
          <ul key={index}>
            <li>{item.name}</li>
            <li>{item.age}</li>
            <li>{item.email}</li>

                <h1>---Function sending props-----</h1>

         <button 
         onClick={() =>handleSendEmail(item.email)}
         className="px-2 py-4 bg-blue-600 rounded-lg">Send Email</button>
          </ul>
        ))}
      </div>

      
      <br></br>
      <h1>----Only one from props-----</h1>
      <div>{personal}</div>

      <br></br>

         
   

    </div>
  );
};

export default UserCard;
