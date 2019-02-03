import React from "react";
import Menu from "../Menu/Menu";
import {Link} from "react-router-dom";
import classes from './Header.module.sass';

const Header = () => {

  const menuItems = [
    {label: 'Home', path: '/'},
    {label: 'Products', path: '/products/'},
    {label: 'Contacts', path: '/contacts'}
  ];

  return (
    <header className={classes.header}>
      <nav className='navbar navbar-expand-lg container'>
        <Link
          className="navbar-brand"
          to='/'>
          SHOP
        </Link>
        <Menu menuItems={menuItems}/>
      </nav>
    </header>
  )
};

export default Header;
