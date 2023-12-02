import Logo from '@/components/Logo'
import Link from 'next/link'
import React from 'react'

const Gebruikersvoorwaarden = () => {
  const texts = [
    "Wie kan onze Diensten gebruiken: Om onze Diensten te gebruiken, moet u ten minste 18 jaar oud zijn, zonder uitzonderingen.U registreert zich met uw telefoonnummer en geeft uw leeftijd op. Alle AI's, bots of geautomatiseerde systemen zijn uitgesloten van het gebruik van onze Diensten. ",
    "Gegevensbescherming en Privacy: Ondanks dat Mindfuse anoniem is, nemen we de bescherming van uw gegevens zeer serieus. Ons Privacybeleid beschrijft welke informatie u met ons deelt en hoe we deze behandelen.",
    "Abonnementen: Om gebruik te maken van Mindfuse is een abonnement vereist. De specifieke voorwaarden en kosten van dit abonnement worden apart vermeld.",
    "Melden van Overtredend Gedrag: Hoewel we een anoniem platform zijn, streven we naar een veilige en respectvolle omgeving voor alle gebruikers. Als u ongepast gedrag tegenkomt, kunt u dit melden via de rapportagefunctie in onze applicatie. Consequent ongepast gedrag kan leiden tot permanente verwijdering van het platform.",
    "Beëindiging van onze Diensten: Wij behouden ons het recht voor om uw toegang tot Mindfuse tijdelijk of permanent op te schorten bij schending van de Gebruikersovereenkomst of als gevolg van consequent ongepast gedrag.",
    "Licentie voor het gebruik van onze Diensten: Door u te registreren bij Mindfuse krijgt u een persoonlijke, niet-overdraagbare licentie om onze Diensten te gebruiken. Deze licentie eindigt zodra u stopt met het gebruik van onze Diensten of wanneer uw account wordt beëindigd.",
    "Aansprakelijkheidsbeperking: Door onze Diensten te gebruiken gaat u akkoord dat de aansprakelijkheid van Mindfuse, zijn filialen en partners, beperkt is tot het maximaal toegestane onder de wet. ",
    "Toepasselijk recht en rechtsgebied: Alle geschillen met betrekking tot deze Voorwaarden of de Gebruikersovereenkomst worden uitsluitend beslecht door de rechtbanken van Rotterdam, Nederland, en worden beheerst door het Nederlandse recht.",
    "Algemeen: Mindfuse kan de Gebruikersovereenkomst op elk moment bijwerken. Wijzigingen worden 30 dagen voor de inwerkingtreding gecommuniceerd. Door na die datum gebruik te blijven maken van onze diensten, gaat u akkoord met de gewijzigde voorwaarden.",
    "Contact of Vragen: We horen graag van u! Als u vragen of opmerkingen heeft over onze diensten of de Gebruikersovereenkomst, kunt u contact met ons opnemen.Postadres:Mindfuse[Adres in Rotterdam, NL - vul specifiek adres in] "
  ]
  return (
    <div className='w-full max-w-[970px] mx-auto px-4 lg:px-0'>
      <Logo />
      <div className=''>
        <h2 className='text-[24px] font-bold mt-5'>Gebruikersvoorwaarden</h2>
        <div className='mt-10 text-[13px] font-bold'>
          <p>Algemene VoorwaardenLaatst bijgewerkt: 25 april 2023</p>
          <p className='my-4'>Welkom bij Mindfuse! <br /> Mindfuse is een anoniem platform dat u in staat stelt om op een veilige en privé manier verbinding te maken met anderen.</p>
          <div className='pl-3'>
            <ul>
              {texts.map((item, index) => (
                <li key={index} className='list-decimal'>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className='h-[80px] w-full bg-transparent'></div> */}
    </div>
  )
}

export default Gebruikersvoorwaarden