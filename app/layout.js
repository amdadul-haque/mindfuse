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
      <body className={` ${inter.className} bg-black w-screen h-screen text-white relative`}>
        {children}
        <Navbar />
      </body>
    </html>
  )
}
