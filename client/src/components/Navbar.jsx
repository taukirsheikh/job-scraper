import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { GiCrossMark } from 'react-icons/gi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
  };
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
       
      }
    };

    window.addEventListener('resize', handleResize);
    
    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      // window.removeEventListener('mousedown', toggleMenu);
      window.removeEventListener('mousedown', handleOutsideClick);
 

    };
  }, []);

  return (
    <header className="bg-indigo-600 p-4 rounded-b">
      <nav className="max-w-[1440px] py-[0.5rem] items-center mx-auto rounded flex justify-between  ">
        <div className="text-2xl font-bold bg-indigo-100 p-2 rounded">
        <span className='text-blue-500'>
          Job </span>
          <span>Scraper</span></div>
        <div>
          {menuOpen ? (
            <GiCrossMark
              className="text-blue-300 text-4xl  md:hidden block"
              onClick={toggleMenu}
            />
          ) : (
            <MdOutlineMenuOpen
              className="text-blue-300 text-4xl hover:cursor-pointer md:hidden block"
              // onMouseEnter={toggleMenu}
              onClick={toggleMenu}
            />
          )}
        </div>
        <ul 
        ref={menuRef}
          className={`md:flex flex-col md:flex-row gap-20  font-semibold  ${
            menuOpen
              ? 'transition-all duration-300  fixed mt-[27rem] z-20 w-full bg-blue-300 border border-blue-300 rounded flex gap-2 left-0'
              : 'hidden'
          }`
        }
        // onMouseLeave={toggleMenu}
        >
        
          <li className='text-center hover:cursor-pointer hover:bg-indigo-500  p-1 border-b-blue'>Home</li>
          <li className='text-center hover:cursor-pointer hover:bg-indigo-500 w-[100%] p-1'>About</li>
          <li className='text-center hover:cursor-pointer hover:bg-indigo-500 w-[100%] p-1'>Resources</li>
          <li className='text-center hover:cursor-pointer hover:bg-indigo-500 w-[100%] p-2'>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
