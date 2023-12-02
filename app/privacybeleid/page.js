import Logo from '@/components/Logo'
import Link from 'next/link'
import React from 'react'

const Privacybeleid = () => {

  const list1 = [
    "Overzicht: Dit Privacybeleid maakt deel uit van de gebruikersovereenkomst, die ook onze Algemene Voorwaarden bevat. Hierin leggen we uit welke informatie we over jou verzamelen, hoe we deze gebruiken, wanneer we deze delen en welke controle je hebt over de informatie die je met ons deelt. ",
    "Informatie die we over jou verzamelen: Bij het aanmelden en gebruiken van Mindfuse verzamelen we bepaalde gegevens om je de beste ervaring te bieden en om je toegang te verlenen tot onze premium diensten."
  ]
  const title1 = "2.1 Gegevens die je aan ons verstrekt"
  const discList1 = [
    "Accountinformatie: Je telefoonnummer is essentieel voor accountverificatie en communicatie.",
    "Betaalgegevens: Om toegang te krijgen tot onze premium diensten, verzamelen we je betalingsinformatie.",
  ]
  const title2 = "2.2 Hoe we gegevens gebruiken"
  const discList2 = [
    "Accountverificatie: Je telefoonnummer wordt gebruikt voor identificatie en beveiliging.",
    "Facturering: We verwerken je abonnementskosten met je betalingsgegevens.",
  ]
  const list2 = [
    "Delen van jouw informatie: Hoewel jouw privacy essentieel voor ons is, kunnen er situaties zijn waarin we jouw gegevens moeten delen, zoals bij wettelijke verzoeken of voor accountbeveiliging.",
    "Bescherming en beveiliging: Jouw privacy en de veiligheid van je gegevens zijn topprioriteiten. We gebruiken geavanceerde technologieën en procedures om je informatie te beschermen tegen ongeoorloofde toegang.",
    "Jouw rechten en voorkeuren: Als gebruiker heb je recht op inzage, correctie en verwijdering van je gegevens. Neem contact met ons op als je gebruik wilt maken van deze rechten.",
    "Wijzigingen in het privacybeleid: We kunnen dit beleid van tijd tot tijd bijwerken om veranderingen in onze praktijken of vanwege andere operationele, wettelijke of reglementaire redenen te weerspiegelen.",
    "ContactVragen, opmerkingen of klachten? Neem contact met ons op via [contact@email.com] (Vervang dit door je daadwerkelijke contact e-mailadres). "
  ]
  return (
    <div className='w-full max-w-[970px] mx-auto px-4 lg:px-0'>
      <Logo />
      <div className=''>
        <h2 className='text-[24px] font-bold mt-5'>Privacybeleid</h2>
        <div className='mt-10 text-[13px] font-bold'>
          <p>Privacybeleid laatst bijgewerkt: 25 april 2023</p>
          <p className='my-4'>Bij Mindfuse geloven we dat authentieke en betekenisvolle connecties het leven verrijken. In een wereld waar technologie de overhand neemt, hechten we waarde aan het beschermen van jouw privacy. Hier volgt wat we doen met de informatie die je met ons deelt.</p>
          <div className='pl-3'>
            <ul>
              {list1.map((item, index) => (
                <li key={index} className='list-decimal'>{item}</li>
              ))}
            </ul>
            <li className='list-none ml-[-16px]'>{title1}</li>
            <ul className='list-disc'>
              {discList1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <li className='list-none ml-[-16px]'>{title2}</li>
            <ul className='list-disc'>
              {discList2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <ul>
              {list2.map((item, index) => (
                <li key={index} className='list-decimal'>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Privacybeleid