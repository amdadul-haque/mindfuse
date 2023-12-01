import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mindfuse',
  description: '',
}


//node mailer : vdin eluz pcic rlsa

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className} py-10 md:py-12 bg-black min-h-screen text-white relative`}>
        {children}
        <div className='h-[80px] w-full bg-transparent'></div>
        <div className='absolute bottom-[40px] left-0 right-0'>
          <Navbar />
        </div>
        <ToastContainer position="top-right" />
      </body>
    </html>
  )
}
