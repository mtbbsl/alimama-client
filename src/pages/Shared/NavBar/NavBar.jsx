import { Link } from "react-router-dom";
import logo from "/logo-w.png";
import avatar from "/photo.jpg";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-900 text-white h-24 mb-6 rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="logo" className="h-12" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center">
          <img
            src={avatar}
            alt="profile picture"
            className="w-12 rounded-full cursor-pointer"
          />
          <button className="btn btn-outline btn-warning btn-sm">
            SignOut
          </button>
        </div>
        <Link to="/login">
          <button className="btn btn-outline btn-warning btn-sm">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
