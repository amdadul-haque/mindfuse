'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Contact = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [isLoading, setIsLoading] = useState(false);
  const handleButtonClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromMail: email,
          message: message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        // Handle success (e.g., show a success message)
        console.log(result.message);
      } else {
        // Handle error (e.g., show an error message)
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      toast.success('Email Sent Successfully');
      setEmail('');
      setMessage('');
    }
  };
  return (
    <div className='w-full max-w-[769px] mx-auto px-4 lg:px-0'>
      <Link href='/'>
        <div className='flex justify-center'>
          <img src="/assets/logo.svg" alt="" />
        </div>
      </Link>

      <div className=''>
        <h2 className='text-[24px] font-bold mt-7'>Contact</h2>
        <p className='text-[13px] font-bold'>We reageren zo snel mogelijk op uw bericht</p>
        <form onSubmit={handleButtonClick} className='mt-8 w-full'>
          <div className='w-full flex flex-col md:flex-row gap-8'>
            <h2 className='text-[20px]'>Email</h2>
            <input
              type="email"
              className='w-full lg:w-1/2 bg-transparent border-b focus:outline-none text-xl'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mt-10 flex flex-col md:flex-row gap-4'>
            <h2 className='text-[20px]'>Bericht</h2>
            <textarea
              name=""
              id=""
              cols="20"
              rows="10"
              className='w-full px-3 py-2 bg-transparent border focus:outline-none text-xl'
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type='submit' disabled={isLoading}
            className='bg-white text-black text-[15px] font-bold py-3 px-10 rounded-full my-5'>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact