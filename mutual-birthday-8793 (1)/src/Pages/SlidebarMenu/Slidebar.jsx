import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sliderbar.css";

// ...

export default (props) => {
  return (
    <Menu right {...props}>
      <h6 style={{ color: "white", letterSpacing: "2px" }}>
        ARE YOU A PROPERTY OWNER/MANAGER?
      </h6>
      <a className="menu-item" href="/salads">
        List new Property
      </a>
      <a className="menu-item" href="/pizzas">
        Sign In To Your DashBoard
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};
