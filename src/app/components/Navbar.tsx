'use client';

import Image from "next/image";

export const Navbar = () => {
    return (
        <nav className="navbar sticky top-0 z-50 bg-[#120a07]/95 backdrop-blur-md shadow-md px-4 md:px-8 py-3">
            {/* LEFT */}
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                    </div>

                    <ul className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow bg-[#1b110c] rounded-box w-52 text-white">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#champions">Champions</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#feedback">Feedback</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Logo + Academy Name */}
                <a href="#home" className="flex items-center gap-2 sm:gap-3">
                    <Image
                        src="/devanshlogo.png"
                        alt="Devansh Academy"
                        width={60}
                        height={60}
                        className="object-contain sm:w-18 sm:h-18"
                    />

                    <div className="flex flex-col leading-none">
                        <span className="text-sm sm:text-lg md:text-xl font-bold text-[#E2874B]">
                            Devang Chess
                        </span>
                        <span className="text-sm sm:text-lg md:text-xl font-bold text-white">
                            Academy
                        </span>
                    </div>
                </a>
            </div>

            {/* CENTER - Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3 px-1 text-lg font-semibold text-white">
                    {[
                        ["Home", "#home"],
                        ["About", "#about"],
                        ["Courses", "#courses"],
                        ["Champions", "#champions"],
                        ["Gallery", "#gallery"],
                        ["Feedback", "#feedback"],
                        ["Contact", "#contact"],
                    ].map(([label, href]) => (
                        <li
                            key={label}
                            className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#E2874B] after:transition-all after:duration-300 hover:after:w-full hover:text-[#E2874B] transition-colors duration-300"
                        >
                            <a href={href}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT */}
            <div className="navbar-end">
                <a
                    href="#contact"
                    className="btn border-none bg-[#E2874B] text-white text-xs sm:text-sm px-4 sm:px-6 rounded-xl shadow-md hover:bg-[#d06b2c] hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    Book a Session
                </a>
            </div>
        </nav>
    );
};
