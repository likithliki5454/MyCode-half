import React, { useState } from "react";
import list from "../data";

const Products = ({ handleClick }) => {
  return (
    <section id="products">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Products;


const Cards = ({ item, handleClick }) => {
  const { title, author, img } = item;
  return (
    <div className="cards">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};