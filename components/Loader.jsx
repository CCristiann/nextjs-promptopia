'use client'

import React from 'react'

import { Flowbite, Spinner } from 'flowbite-react';

const Loader = () => {
  return (
    <Flowbite>
    <div className='fixed top-0 left-0 h-screen w-screen bg-black/40  z-[999]'>
        <div className='w-fit h-fit'>
          <Spinner 
          className='text-orange-200 fill-orange-500 z-[999]'
          aria-label="loader"
          size='xl'
        />
        </div>
    </div>
    </Flowbite>
  )
}

export default Loader