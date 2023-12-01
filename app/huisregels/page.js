import Link from 'next/link'
import React from 'react'

const Huisregels = () => {
  const texts = ["Anonimiteit waarborgen: Deel geen persoonlijke informatie zoals namen, adressen, telefoonnummers, of andere identificeerbare informatie. Mindfuse is ontworpen voor anonieme interacties.",
  "Respecteer elkaar: Ongeacht de anonimiteit, verdient iedereen respect. Beledigingen, intimidatie of discriminatie worden niet getolereerd", 
  "Geen ongepaste content: Elk gesprek dat neigt naar gewelddadige, seksueel expliciete of haatdragende onderwerpen is verboden.","Vriendelijkheid eerst: Benader elk gesprek met een open geest en een vriendelijke houding.",
  "Geen spam of ongewenste berichten: Stuur geen ongevraagde promotionele berichten, links of andere vormen van spam.",
  "Meld ongepast gedrag: Als je je oncomfortabel voelt bij een gesprek of als iemand de regels overtreedt, meld dit dan onmiddellijk via de daarvoor bestemde functie in de app.",
  "Geniet van het moment: Mindfuse is bedoeld voor authentieke, real-time gesprekken. Probeer in het hier en nu te blijven en geniet van de unieke ervaring van elk gesprek. "]
  return (
    <div className='w-full max-w-[970px] mx-auto px-4 lg:px-0'>
      <Link href='/'>
        <div className='flex justify-center'>
          <img src="/assets/logo.svg" alt="" />
        </div>
      </Link>
      <div className=''>
        <h2 className='text-[24px] font-bold mt-7'>Huisregels</h2>
        <div className='mt-10 text-[13px] font-bold'>
          <p>Huisregels voor Mindfuse</p>
          <div className='pl-3'>
            <ul>
              {texts.map((item, index) => (
                <li key={index} className='list-decimal'>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className='bg-green-500 h-[100vh] mb-40'></div> */}
    </div>
  )
}

export default Huisregels