import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to='/'
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}>
        Home
      </NavLink>
      <NavLink
        to='/dashboard'
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}>
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Navbar;
