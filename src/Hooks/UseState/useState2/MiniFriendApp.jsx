import React, { useState } from 'react'

const MiniFriendApp = () => {
     const friendsData = [
    { name: "John", age: 25, city: "Chennai" },
    { name: "Meena", age: 22, city: "Bangalore" },
    { name: "Arun", age: 30, city: "Hyderabad" }
  ];

   const [friends] = useState(friendsData);// useState([]) //Just viewing data so use this type of syntax we dont update or else so we didn't use set-fn
   const [selectedFriend, setSelectedFriend] = useState({});

   return (
    <div>
        <h1>Friends List :</h1>
        <ul>
            {friends.map((item, index) => (
                <li key={index} onClick={() => setSelectedFriend(item)}>
                    {item.name}
                </li>
            ))}
        </ul>

        <h2>📋 Selected Friend:</h2>
      {selectedFriend.name ? (
        <p>
          Name: {selectedFriend.name} <br />
          Age: {selectedFriend.age} <br />
          City: {selectedFriend.city}
        </p>
      ) : (
        <p>No friend selected</p>
      )}
    </div>
  )
}

export default MiniFriendApp