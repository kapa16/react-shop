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
        class="navbar-nav mr-auto"
        key={item.label}
        label={item.label}
        path={item.path}
      />
    )
  });
  return (
    <ul>
      {menuElement}
    </ul>
  )
};

export default Menu;