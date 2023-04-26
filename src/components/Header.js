import Image from 'next/image';
import logo from '../../public/images/logo.png'

import { BsPlayCircle } from 'react-icons/Bs';
import { NavLink } from 'react-bootstrap';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container header ">
          <div>
            <Image className="" src={logo} width={141} height={42} alt={logo} />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className
                  active="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="solutions">
                  Solutions
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href=" elements">
                  Elements
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href=" blog">
                  
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href=" Contacts">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-primary "><BsPlayCircle /> Watch the demo</a>
        </div>
      </nav>
  );
}

export default Header;