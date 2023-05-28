import React from 'react'
import Typed from 'react-typed'
import {BsEmojiWinkFill} from 'react-icons/bs'
import { toShort } from 'emojione'

const Hero = () => {
  const emojiString = toShort('😅');
  return (
    <div className='w-full bg-indigo-300 py-[100px]'>
        <div className="max-w-[1240px] mx-auto text-center font-bold my-[]100px">
            <div className='md:text-3xl text-2xl '>Hello Seeker</div>
            <br />
            <h1 className='text-teal-100  md:text-7xl text-5xl '>Keep Exploring</h1>
            <br />
            <div className='text-[20px] md:text-[50px] text-indigo-500 text-cen
            '>Find 
            <Typed className='pl-3' strings={['Your Dream Job','😅']}
        typeSpeed={100}
        backSpeed={50}
        loop={true}/>
            </div>

        </div>
    </div>
  )
}

export default Hero