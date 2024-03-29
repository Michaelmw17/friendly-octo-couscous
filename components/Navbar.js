import React, { useState, useRef } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/EcoLogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const inputRef = useRef();

  return (
    <div>
      <nav className="bg-white bg-opacity-70 shadow-sm fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0   mr-14 ">
                <Image alt="Logo" src={logo} width={80} height={80} />
              </div>
              <div className="hidden md:block">
                <div className="ml- flex items-baseline space-x-4">
                  <Link
                    href="/"
                    activeClass="home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Home
                    </a>
                  </Link>
                  <br />
                  <Link
                    href="#Introduction"
                    activeClass="Introduction"
                    to="#Introduction"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Introduction
                    </a>
                  </Link>
                  <br />
                  <Link
                    href="#Accommodation"
                    activeClass="Accommodation"
                    to="#Accommodation"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Rooms
                    </a>
                  </Link>
                  <br />
                  <Link
                    href="#gallery"
                    activeClass="gallery"
                    to="#gallery"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Photos
                    </a>
                  </Link>
                  <br />
                  <Link
                    href="#about"
                    activeClass="about"
                    to="#about"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      About
                    </a>
                  </Link>
                  <br />
                  <Link
                    href="#contact"
                    activeClass="contact"
                    to="#contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={!isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(inputRef) => (
            <div className="md:hidden " id="navbar-collapse">
              <div
                ref={inputRef.current}
                className="bg-white bg-opacity-70 px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href="/"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </a>
                </Link>
                <br />
                <Link
                  href="#Introduction"
                  activeClass="Introduction"
                  to="#Introduction"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Introduction
                  </a>
                </Link>
                <br />
                <Link
                  href="#Accommodation"
                  activeClass="Accommodation"
                  to="#Accommodation"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Rooms
                  </a>
                </Link>
                <br />
                <Link
                  href="#gallery"
                  activeClass="gallery"
                  to="#gallery"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Photos
                  </a>
                </Link>
                <br />
                <Link
                  href="#about"
                  activeClass="about"
                  to="#about"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    About
                  </a>
                </Link>
                <br />
                <Link
                  href="#contact"
                  activeClass="contact"
                  to="#contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
