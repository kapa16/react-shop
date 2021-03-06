import React from "react";
import {Link} from "react-router-dom";

const MenuItem = ({label, path}) => {
  return (
    <li className='nav-item'>
      <Link
        className='nav-link'
        to={path}
      >
        {label}
      </Link>
    </li>
  )
};

export default MenuItem;