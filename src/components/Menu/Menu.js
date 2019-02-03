import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({menuItems}) => {

  const menuElement = menuItems.map((item) => {
    return (
      <MenuItem
        key={item.label}
        {...item}
      />
    )
  });
  return (
      <ul className="navbar-nav">
        {menuElement}
      </ul>
  )
};

export default Menu;