import { Link } from 'react-router-dom';
import logo from '/logo-w.png';
import avater from '/photo.jpg';

const NavBar = () => {

  return (
    <div className="navbar bg-gray-900 text-white px-6 py-6 flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <a className='btn btn-ghost'>
          <img className="h-16" src={logo} alt="logo" />
        </a>
      </div>
      <div className='flex-none gap-0'>
        <Link to='/' className='btn btn-ghost normal-case text-sm'>Home</Link>
        <Link className='btn btn-ghost normal-case text-sm'>Blog</Link>
        <div className='flex items-center'>
          <img src={avater} alt="profile picture" className='w-12 rounded-full cursor-pointer'/>
          <button className='btn btn-ghost normal-case text-sm'>Sign Out</button>
        </div>
        <Link className='btn btn-ghost normal-case text-sm'>Login</Link>
      </div>
    </div>
  );
};

export default NavBar;