//Parent File
import React from "react";
import UserCard from "./UserCard";

const users = [
  { name: "Bala", email: "bala@example.com", age: 25 },
  { name: "Ravi", email: "ravi@example.com", age: 28 },
  { name: "Meena", email: "meena@example.com", age: 22 },
];

// Example of a single user object if needed elsewhere
const personal = { name: "Vikin", email: "vikin@gmail.com", age: 25 };

const UserList = () => {

    const handleSendEmail = (email) => {
        alert(`Email sent to ${email}`);
        console.log(`Email sent to ${email}`);
    }


  return (
    <div>
      <h1>UserList</h1>
      <UserCard 
      users={users} //whole array send then loop in child 
      personal={personal.email} //only email send to child
        handleSendEmail={handleSendEmail} //function to send email  
      />
    </div>
  );
};

export default UserList;
