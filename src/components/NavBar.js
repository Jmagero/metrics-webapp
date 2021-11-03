import { NavLink } from 'react-router-dom';
import { FaAngleLeft, FaMicrophone, FaPlusCircle } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
  ];

  return (
    <div className="navBar navBarFlex">
      <NavLink to={links[0].path} className="link navBarFlex">
        <FaAngleLeft className="arrow" />
      </NavLink>
      <div>
        <h3 className="navBarText latoLight">covid stats</h3>
      </div>
      <div className="rightIcons navBarFlex">
        <FaMicrophone />
        <FaPlusCircle />
      </div>
    </div>
  );
};

export default NavBar;
