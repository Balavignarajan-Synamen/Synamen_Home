import React, { useState, useEffect } from "react";

const ItemList = () => {
  const [newItem, setNewItems] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

 
  const [items , setItems] = useState(() => {
      try {
        const saved = localStorage.getItem("todoItems");
        return saved ? JSON.parse(saved) : [];
      } catch (err) {
        console.error(err);
        return [];
      }
  });
  // useEffect(()=> {
  //   const savedItems = localStorage.getItem("todoItems");
  //   if(savedItems){
  //     setItems(JSON.parse(savedItems));
  //   }
  // },[]);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (newItem.trim() !== "") {
 
    const newItemObject = {
      text : newItem,
      done : false,
    };

      setItems([...items, newItemObject]);
      setNewItems("");
  }
  };

  const deleteItem = (index) => {
    const newList = [...items];
    newList.splice(index, 1);
    setItems(newList);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditedText(items[index].text);
  };

  const saveEdit = () => {
    const copy = [...items];
    copy[editIndex].text = editedText;
    setItems(copy);
    setEditIndex(null);
    setEditedText("");
  };

  const toggleDone = (index) => {
    const copy = [...items];
    copy[index].done = !copy[index].done;
    setItems(copy);
  };
  

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="mb-4">APP</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter here"
          value={newItem}
          onChange={(e) => setNewItems(e.target.value)}
          className="mr-2"
        />
        <button onClick={addItem} className="mr-2">
          Add
        </button>
      </div>
      <ul className="list-none p-0 w-full max-w-md">
        {items.map((item, index) => (
          <li key={index} className="flex items-center mb-2">
            <input 
              type="checkbox"
              checked={item.done}
              onChange={()=> toggleDone(index)}
              className="mr-2"
            />
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="mr-2 flex-1"
                />
                <button onClick={saveEdit} className="mr-2">
                  Save
                </button>
              </>
            ) : (
              <>
                 <span
                  className={`flex-1 ${item.done ? "line-through text-gray-500" : ""}`}
                >
                  {item.text}
                </span>
                <button onClick={() => startEditing(index)} className="mr-2">
                  Edit
                </button>
                <button onClick={() => deleteItem(index)}>❌ Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
