import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
      <>
       <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row item-center justify-between text-white bg-gray-800 sm:px-20">
        <section className="text-lg">
        © Copyright | All rights reserved
        </section>
        <section className='flex items-center justify-center gap-5 text-2xl text-white'>
          <a className='hover:text-yellow-500 transition-all ease-in-out duration-300 cursor-pointer'> <BsFacebook/>
          </a>
          <a className='hover:text-yellow-500 transition-all ease-in-out duration-300 cursor-pointer' href='https://www.instagram.com/sanatani_rohit_kashyap/'> <BsInstagram/></a>
          <a className='hover:text-yellow-500 transition-all ease-in-out duration-300 cursor-pointer'> <BsTwitter/></a>
          <a className='hover:text-yellow-500 transition-all ease-in-out duration-300 cursor-pointer'> <BsLinkedin/></a>
          
        </section>
      </footer>

      </>
  )
}

export default Footer