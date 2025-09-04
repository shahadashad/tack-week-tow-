import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState([
    { name: "Dress", price: 45 },
    { name: "Perfume", price: 75 },
  ]);

  // Add item
  function addItem() {
    const trimmed = name.trim();
    const value = parseFloat(price);

  
     
      
    

    // Prevent duplicates
    if (items.some((it) => it.name.toLowerCase() === trimmed.toLowerCase())) {
      console.log("Item already exists!");
      return;
    }

    setItems([...items, { name: trimmed, price: value }]);
    setName("");
    setPrice("");
  }

  // Delete one item
  function deleteItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  // Clear all
  function clearAll() {
    if (items.length === 0) return;
    setItems([]);
  }

  // Price color
  function getPriceColor(p) {
    if (p < 20) return "green";
    if (p <= 50) return "orange";
    return "red";
  }

  return (
    <div className="container">
      <h1>My  shopping List</h1>
      <p>Hello Vite!</p>

      <div className="input-row">
        <label>Item: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-row">
        <label>Price: </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={addItem}>Add</button>
        <button onClick={clearAll}>Clear All</button>
      </div>

      <h2>Items:</h2>
      <ul className="list">
        {items.map((item, idx) => (
          <li key={idx}>
            <span>
              • {item.name}{" "}
              <b style={{ color: getPriceColor(item.price) }}>
                ${item.price}
              </b>
            </span>
            <button onClick={() => deleteItem(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
