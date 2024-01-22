"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  // const [isDark, setIsDark] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const onNavbarMobileClick = () => {
    setShowNavbar(!showNavbar);
    setShowProfileMenu(false);
  };

  const onProfileMenuClick = () => {
    setShowProfileMenu(!showProfileMenu);
    setShowNavbar(false);
  };
  return (
    <nav className="bg-primary border-gray-200 md:px-10 max-h-[4.5rem] ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        {/* <!-- Logo --> */}
        <a
          href="#"
          className="flex items-center space-x-3 text-white rtl:space-x-reverse"
        >
          {/* <Image
            width={40}
            height={40}
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            FORUM GEDE
          </span>
        </a>

        {/* <!-- Dropdown Profile menu--> */}
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse md:-mt-1 ">

          {/* Before Login*/}
          {/* <button
            type="button"
            className="text-primary font-bold py-[6px] px-4 md:py-[9px] md:px-5 bg-white rounded-lg flex justify-center items-center gap-x-2"
          >
            <span className="text-lg md:text-xl">Login</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M256 8c137 0 248 111 248 248S393 504 256 504S8 393 8 256S119 8 256 8m-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4"
              />
            </svg>
          </button> */}

          {/* After Login */}
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={() => onProfileMenuClick()}
          >
            <span className="sr-only">Open user menu</span>
            <Image
              width={40}
              height={40}
              className="w-8 h-8 rounded-full"
              src="https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png"
              alt="user photo"
            />
          </button>

          <div
            className={`z-50 ${
              showProfileMenu ? "absolute right-3" : "hidden"
            } mt-80   my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 ">
                Altaf Fattah Amanullah
              </span>
              <span className="block text-sm text-gray-500 truncate ">
                name@gmail.com
              </span>
            </div>
            <ul className="py-2 text-white" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Postingan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center justify-center p-2 text-sm text-white rounded-lg size-10 md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 hover:ring-gray-200 "
            aria-controls="navbar-user"
            aria-expanded="false"
            onClick={() => onNavbarMobileClick()}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* <!-- Mobile Navbar menu --> */}
        <div
          className={` ${
            showNavbar ? "block" : "hidden"
          } md:order-1 mt-4 w-full md:flex md:m-auto md:w-auto items-center md:justify-between p-5 md:p-2 z-50`}
          id="navbar-user"
        >
          <ul className="flex flex-col p-4 font-medium bg-gray-400 border border-gray-800 rounded-lg gap-y-3 md:h-auto md:p-0 md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:items-start md:justify-start md:gap-y-0 ">
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-lg font-semibold text-white rounded bg-primary md:bg-transparent md:text-blue-700 md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-lg font-semibold text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-lg font-semibold text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-lg font-semibold text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Postingan
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
