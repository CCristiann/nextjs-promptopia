'use client'

import React from 'react'

import { Flowbite } from 'flowbite-react'
import { Spinner } from 'flowbite-react'

const Loader = () => {
  return (
  <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/80'>
    <Spinner
     className='text-neutral-300 fill-orange-500'
     size='md'
     aria-label='loader'
   />
  </div>
  )
}

export default Loader