import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({menuItems}) => {

  const menuElement = menuItems.map((item) => {
    return (
      <MenuItem
        key={item.label}
        label={item.label}
        path={item.path}
      />
    )
  });
  return (
      <ul className="navbar-nav justify-content-center">
        {menuElement}
      </ul>
  )
};

export default Menu;