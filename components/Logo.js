import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex justify-center'>
        <img src="/assets/logo.png" alt="logo" className='h-[120px] sm:h-[150px] lg:h-[220px]' />
      </div>
    </Link>
  )
}

export default Logo