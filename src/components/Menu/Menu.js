import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {

  const menuItems = [
    {label: 'Home', path: '/'},
    {label: 'Products', path: '/products/'},
    {label: 'Contacts', path: '/contacts'}
  ];

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
      <ul className="navbar-nav">
        {menuElement}
      </ul>
  )
};

export default Menu;