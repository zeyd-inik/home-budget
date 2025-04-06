//rrd
import { NavLink, useLoaderData } from 'react-router-dom';

//css
import './navbar.scss';

//assets
import logomark from '../../assets/logomark.svg';

//libraries
import { TrashIcon } from '@heroicons/react/24/solid';

function Navbar() {
  const { userName } = useLoaderData();
  return (
    <nav className="navbar">
      <NavLink
        className="nav-link"
        to="/"
      >
        <img
          src={logomark}
          alt="logomark"
          aria-label="logomark"
        />
        <span>Home Budget</span>
      </NavLink>
      {userName && (
        <button className="delete-btn">
          <span>Delete User</span>
          <TrashIcon className="trash-icon" />
        </button>
      )}
    </nav>
  );
}

export default Navbar;
