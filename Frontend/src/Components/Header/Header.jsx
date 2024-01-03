import { useEffect, useRef, useContext } from "react";
import logo from "../../assets/Images/logo.png";
import { NavLink, Link } from "react-router-dom";
import userImg from "../../assets/Images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find A Doctor",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const Header = () => {
  const { user, role, token } = useContext(authContext);

  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-irisBlueColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {token && user ? (
              <h1>{user?.name}</h1>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor text-white py-2 px-6 font-[600] h-[40px] flex item-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}
            <div>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={userImg}
                    className="w-full rounded-full item-center"
                    alt=""
                  />
                </figure>
              </Link>
            </div>

            <span className="md:hidden">
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
