import React from "react";
import Menu from "../Menu/Menu";
import {Link} from "react-router-dom";

const Header = () => {

  const menuItems = [
    {label: 'Home', path: '/'},
    {label: 'Products', path: '/products/'},
    {label: 'Contacts', path: '/contacts'}
  ];

  return (
    <nav className='navbar navbar-expand-lg container'>
      <Link
        className="navbar-brand"
        to='/'>
        SHOP
      </Link>
      <Menu menuItems={menuItems}/>
    </nav>
  )
};

export default Header;