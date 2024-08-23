import React, { useEffect, useState } from "react";
import './product.css';

const Product = () => {
  const [data, setData] = useState([]);
  const [clickedHearts, setClickedHearts] = useState({});

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleHeartColor = (index) => {
    setClickedHearts({
      ...clickedHearts,
      [index]: !clickedHearts[index]
    });
  };

  return (
    <div className="product-list">
      {data?.map((item, index) => (
        <div className="box" key={item.id}>
          <div className="img-list">
            <img className="img" src={item.image} alt={item.title} />
          </div>
          <div className="product-info">
            <div className="product-title">{item.title.substring(0, 20)}</div>
            <div className="product-price">
              ${item.price}
              <img
                src={clickedHearts[index] ? "heart1.png" : "heart.jpg"}
                alt="Heart Icon"
                className="heart-icon"
                onClick={() => toggleHeartColor(index)}
              />
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Product;