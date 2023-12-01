import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const navStyle = 'text-white text-[15px] font-regular'
  return (
    <div className='w-screen max-w-[615px] mx-auto'>
      <div className='flex flex-wrap gap-5 md:flex-nowrap justify-center md:justify-between px-4 md:px-0'>
        <Link href='/gebruikersvoorwaarden' className={navStyle}>Gebruikersvoorwaarden</Link> 
        <Link href='/privacybeleid' className={navStyle}>Privacybeleid</Link> 
        <Link href='/huisregels' className={navStyle}>Huisregels</Link>
        <Link href='/contact' className={navStyle}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar