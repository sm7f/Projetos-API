import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
        <nav className="bg-violet-700 border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-row-reverse items-center justify-between mx-auto p-4">
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                <Link href="/" passHref className="text-white md:hover:text-blue-700 ">Inicio</Link>
                <Link href="/contato" passHref className="text-white md:hover:text-blue-700 ">Contato</Link>
                <Link href="/login" passHref className="text-white md:hover:text-blue-700 ">Login</Link>
                <Link href="#" passHref className="text-white md:hover:text-blue-700 ">Sobre</Link>
              </ul>
            </div>
          </div>
        </nav>
  );
};

export default Nav;
