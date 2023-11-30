import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mindfuse',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className} bg-black min-h-screen text-white relative`}>
        {children}
        <div className='absolute bottom-[40px] left-0 right-0'>
          <Navbar />
        </div>
      </body>
    </html>
  )
}
