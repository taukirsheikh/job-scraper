import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {ImMail2} from 'react-icons/im'

const Footer = () => {
  return (
    <>

<footer className="mt-4 text-center text-white bg-blue-500">
  <div className=" pt-9 flex  ">
    <div className="mb-9   flex items-center justify-center w-screen  gap-2 md:mx-4 mx-1">
      <a href="https://www.linkedin.com/in/mohammed-taukir-sheikh-179939140/" target='_blank'title='Mohammed Taukir Sheikh' className=" text-neutral-800 dark:text-neutral-200 hover:text-blue-900">
        <BsLinkedin className='text-2xl'/>
        
      </a>
      <a href="https://github.com/taukirsheikh" target='_blank' title='taukirsheikh' className=" w-full text-neutral-800 dark:text-neutral-200 hover:text-black ">
        <AiFillGithub className='text-2xl'/>
        
      </a>
      <a href="">

      <ImMail2 className='text-xl'/>
      </a>
      <a href="mailto:sheikhtaukir21@gmail.com" className=" text-neutral-800 dark:text-neutral-200 mt-[-4px] mr-0 hover:cursor-pointer hover:text-sky-400">
        
            sheikhtaukir21@gmail.com
           
       
      </a>
     
    </div>
  </div>

 
  <div
    className="bg-blue-500 p-4 text-center text-neutral-700  dark:text-neutral-200">
    © 2023 Copyright:
    <a
      className="text-neutral-800 dark:text-neutral-400"
      href="https://www.linkedin.com/in/mohammed-taukir-sheikh-179939140/"
      > Mohammed Taukir Sheikh</a
    >
  </div>
</footer>
    </>
)}

export default Footer