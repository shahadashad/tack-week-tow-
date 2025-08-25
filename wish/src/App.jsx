
import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Everyday Shirt",
      price: 30,
      discountPrice: 20,
      stock: true,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
    },
    {
      id: 2,
      name: "Contour Shirt",
      price: 56,
      discountPrice: null, // no discount
      stock: true,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300",
    },
    {
      id: 3,
      name: "Hollow Port",
      price: 39.11,
      discountPrice: 29.99,
      stock: false,
      image: "https://images.unsplash.com/photo-1520975918318-3a5f7db0bb2b?w=300",
    },
    {
      id: 4,
      name: "Realm Bone",
      price: 22,
      discountPrice: null,
      stock: true,
      image: "https://images.unsplash.com/photo-1520975688396-9d8ba1d1c93d?w=300",
    },
  ]);

  const removeItem = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setProducts([]);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header>
        <h1>Your Wishlist</h1>

        {/* Toggle Switch for Dark Mode */}
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>

        <button className="remove-all" onClick={removeAll}>
          Remove All
        </button>
      </header>

      <div className="product-list">
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>

              {item.discountPrice ? (
                <p>
                  <span className="old-price">${item.price}</span>{" "}
                  <span className="new-price">${item.discountPrice}</span>
                </p>
              ) : (
                <p>${item.price}</p>
              )}

              <p className={`stock ${item.stock ? "in-stock" : "out-stock"}`}>
                {item.stock ? "IN STOCK" : "OUT OF STOCK"}
              </p>
              <button
                className={item.stock ? "btn add" : "btn contact"}
                onClick={() => removeItem(item.id)}
              >
                {item.stock ? "Add to Cart" : "Contact Us"}
              </button>
            </div>
          ))
        ) : (
          <p>No items in wishlist.</p>
        )}
      </div>
    </div>
  );
}

export default App;