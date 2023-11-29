import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='max-w-[969px] mx-auto py-16'>
        <div className='flex flex-col items-center gap-9'>
          <img src="/assets/logo-text.svg" alt="logo-with-text" />
          <Link href="/">
            <img src="/assets/app-store.svg" alt="app store" />
          </Link>
        </div>
      </div>
    </main>
  )
}
