"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { BsInstagram, BsTwitter, BsFacebook} from 'react-icons/bs';

const Footer = () => {
  return (
    <section className='max-w-7xl mx-auto relative bg-[#1b263b py-10 px-6 flex flex-wrap justify-center md:justify-between gap-10'>
      <div className="col">
      <div className='flex gap-6 items-center'>
      <Link href="/">
          <Image
            src="assets/images/logo.svg"
            width={35}
            height={35}
            alt="Promptopia Logo"
          />
        </Link>
        <h1 className='text-3xl md:text-4xl font-bold orange_gradient'>Promptopia</h1>
      </div>
      <div className='flex flex-col gap-6'>
        <h3 className='text-base md:text-lg text-white font-semibold'>Subscribe to our Newsletter</h3>
        <p className='text-sm md:text-base text-white font-normal'>Subscribe to our newsletter to receive exclusive offers, latest news and updates.</p>
        <div className='flex gap-6 w-full'>
          <input type='text' placeholder='Email address' className='rounded-md py-2 pl-4 pr-10 text-sm text-black font-medium focus:outline-none focus:ring-0 w-3/4'/>
          <button className='orange_btn w-1/4 text-sm'>Subscribe</button>
        </div>
      </div>
      </div>

      <div className="col">
        <h5 className='font-semibold text-white text-base md:text-lg'>Contact information</h5>
      </div>

      <div className="col">
        <h5 className='font-semibold text-white text-base md:text-lg'>Follow us</h5>
        <div className='flex gap-4 text-white text-base md:text-lg'>
          <BsInstagram />
          <BsTwitter />
          <BsFacebook />
        </div>
      </div>
    </section>
  )
}

export default Footer

