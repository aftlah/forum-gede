"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";


const Navbar = ({}) => {
	const path = usePathname();
	const [showNavbar, setShowNavbar] = useState(false);
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
		<nav id="up"  className="bg-primary border-gray-200 md:px-8 max-h-[4.5rem] ">
			<div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto md:p-4">
				{/* <!-- Logo --> */}
				<Link
					href={"/"}
					className="flex items-center p-4 space-x-3 text-white md:p-0 rtl:space-x-reverse"
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
				</Link>

				{/* <!-- Dropdown Profile menu--> */}
				<div className="flex items-center p-4 space-x-3 md:p-0 md:order-2 md:space-x-0 rtl:space-x-reverse md:-mt-1 ">

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
						// onFocus={() => setShowProfileMenu(true)}
						onBlur={() => setShowProfileMenu(false)}
						className={`flex text-sm rounded-full cursor-pointer md:me-0 `}
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
							className={`w-10 h-10  rounded-full border-2  ${showProfileMenu ? "border-white" : "border-transparent"}`}
							src="https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png"
							alt="user photo"
						/>
					</button>
						<div
							className={`z-50 absolute transition duration-150 ease-in-out  right-3 ${showProfileMenu ? " opacity-100" : "opacity-0"} mt-80   my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
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
								{/* <li>
								<Link
									href={"/"}
									className="block px-4 py-2 text-sm text-gray-700 hover:underline underline-offset-[5px]"
								>
									Dashboard
								</Link>
							</li> */}
								<li>
									<Link
										href={"/dashboard/profile"}
										className="block px-4 py-2 text-sm text-gray-700 hover:underline underline-offset-[5px]"
									>
										Profile
									</Link>
								</li>
								<li>
									<Link
										href={"/dashboard/post"}
										className="block px-4 py-2 text-sm text-gray-700 hover:underline underline-offset-[5px]"
									>
										Postingan
									</Link>
								</li>
								<li>
									<Link
										href={"/dashboard/setting"}
										className="block px-4 py-2 text-sm text-gray-700 hover:underline underline-offset-[5px]"
									>
										Sign out
									</Link>
								</li>
							</ul>
						</div>

					<button
						data-collapse-toggle="navbar-user"
						type="button"
						onBlur={() => setShowNavbar(false)}
						className="inline-flex items-center justify-center p-2 text-sm text-white rounded-lg cursor-pointer size-10 md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 hover:ring-gray-200 "
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
					className={`h-screen md:h-auto  transition duration-150 ease-in-out  md:order-1 mt-1 ${showNavbar ? "opacity-100" : "opacity-0"
						} md:opacity-100 w-full md:flex md:m-auto md:w-auto items-center md:justify-between  md:p-2 z-50`}
					id="navbar-user"
				>
					<ul className="flex flex-col p-4 ml-auto font-medium bg-gray-400 border border-gray-800 rounded-lg w-52 md:w-full gap-y-3 md:h-auto md:p-0 md:bg-transparent md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:items-start md:justify-start md:gap-y-0 ">
						<li>
							<Link
								href={"/"}
								className={`block px-3 py-2 text-lg font-semibold text-white  rounded bg-primary md:bg-transparent md:p-0 ${path === "/" ? "underline underline-offset-[5px] " : ""} `}
								aria-current="page"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href={"/#about"}
								className={`block px-3 py-2 text-lg font-semibold text-white rounded hover:underline md:hover:bg-transparent underline-offset-[5px]  md:p-0 ${path === "#about" ? "underline underline-offset-[5px] " : ""} `}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href={"/"}
								className="block px-3 py-2 text-lg font-semibold text-white rounded hover:underline underline-offset-[5px] md:hover:bg-transparent md:p-0 "
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								href={"/posts"}
								className={`block px-3 py-2 text-lg font-semibold text-white ${path === "/posts" ? "underline underline-offset-[5px] " : ""} rounded hover:underline underline-offset-[5px] md:hover:bg-transparent md:p-0 `}
							>
								Postingan
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
