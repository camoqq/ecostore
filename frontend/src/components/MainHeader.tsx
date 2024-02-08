import React from "react";
import LogoIcon from "../assets/logo.svg";
import userIcon from "../assets/icons/user.svg";
import cartIcon from "../assets/icons/cart.svg";
import notificationIcon from "../assets/icons/notification.svg";
import { Link } from "react-router-dom";

const MainHeader: React.FC = () => {
  return (
    <header className="shadow-md py-3 flex justify-between items-center px-5">
      <div>
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={LogoIcon} alt="Eco Store Logo" className="h-12 w-12" />
          <span className="block ml-2 text-xl">Eco Store</span>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-5">
         
          <li>
            <Link
              to="/notifications"
              className="text-sm font-semibold leading-6  text-green-600 flex gap-2 relative"
            >
              <img src={notificationIcon} alt="Cart Icon" className="h-7 w-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">1</span>

            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-sm font-semibold leading-6  text-green-600 flex gap-2 relative"
            >
              <img src={cartIcon} alt="Cart Icon" className="h-7 w-7" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">9</span>
            </Link>
          </li>
          <li className="relative group cursor-pointer">
            <img src={userIcon} alt="User Profile" className="h-7 w-7" />

            <ul className="border group-hover:absolute rounded-lg hidden  group-hover:block top-[28px] right-0 bg-white w-[160px]">
              <li>
                <Link
                  to="/dashboard"
                  className="text-sm font-semibold leading-6  text-green-600 block py-2 px-5 hover:bg-[var(--primary-color)] hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-semibold leading-6  text-green-600 block py-2 px-5 hover:bg-[var(--primary-color)] hover:text-white"
                >
                  Log Out
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-sm font-semibold leading-6  text-green-600 block py-2 px-5 hover:bg-[var(--primary-color)] hover:text-white"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-sm font-semibold leading-6  text-green-600 block py-2 px-5 hover:bg-[var(--primary-color)] hover:text-white"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
