import React from 'react'

const Contact = () => {
  return (
    <div className='w-full max-w-[769px] mx-auto px-4 lg:px-0'>
      <div className='flex justify-center'>
        <img src="/assets/logo.svg" alt="" />
      </div>
      <div className=''>
        <h2 className='text-[24px] font-bold mt-7'>Contact</h2>
        <p className='text-[13px] font-bold'>We reageren zo snel mogelijk op uw bericht</p>
        <form className='mt-8 w-full '>
          <div className='w-full flex flex-col md:flex-row gap-4'>
            <h2 className='text-[20px]'>Email</h2>
            <input type="email" className='w-full lg:w-1/2 bg-transparent border-b focus:outline-none text-xl' />
          </div>
          <div className='mt-10 flex flex-col md:flex-row gap-4'>
            <h2 className='text-[20px]'>Bericht</h2>
            <textarea name="" id="" cols="30" rows="10"
              className='w-full px-3 py-2 bg-transparent border focus:outline-none text-xl'
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact