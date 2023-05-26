import React, { useState, useEffect } from 'react';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { GiCrossMark } from 'react-icons/gi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="bg-indigo-600 p-4 rounded-b-md">
      <nav className="max-w-[1440px] py-[0.5rem] items-center mx-auto rounded flex justify-between">
        <div className="text-2xl font-bold">Job Scraper</div>
        <div>
          {menuOpen ? (
            <GiCrossMark
              className="text-blue-300 text-4xl  md:hidden block"
              onClick={toggleMenu}
            />
          ) : (
            <MdOutlineMenuOpen
              className="text-blue-300 text-4xl hover:cursor-pointer md:hidden block"
              onClick={toggleMenu}
            />
          )}
        </div>
        <ul
          className={`${
            menuOpen ? 'absolute  mt-[15rem] right-6 border border-blue-300 rounded flex  w-52  items-center   gap-8 bg-blue-300' : 'hidden'
          } md:flex flex-col  md:flex-row  gap-20 font-semibold`}
        >
          <li className='text-center hover:cursor-pointer hover:bg-indigo-500 w-[100%] p-1'>Home</li>
          <li className='text-center hover:cursor-pointer hover:bg-indigo-500 w-[100%]'>About</li>
          <li className='text-center hover:cursor-pointer hover:bg-indigo-500 w-[100%] '>Resources</li>
          <li className='text-center hover:cursor-pointer hover:bg-indigo-500 w-[100%] p-1'>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
