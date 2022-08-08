import React from "react";
const Navbar = ({ setShow, size }) => {
  return (
    <div id="nav">
      <div className="nav_box">
        <div className="my_shop" onClick={() => setShow(true)}>
          My Shoping
        </div>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
