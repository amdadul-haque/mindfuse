import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='max-w-[969px] mx-auto'>
        <div className='flex flex-col items-center gap-9'>
          <img src="/assets/logo-text.png" className='h-[210px] sm:h-[280px] md:h-[380px] lg:h-[450px]' alt="logo-with-text" />
          <Link href="/">
            <img src="/assets/app-store-bg.png" alt="app store" className='h-[60px] md:h-[90px]' />
          </Link>
        </div>
      </div>
    </main>
  )
}
