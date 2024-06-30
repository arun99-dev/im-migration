import { Box } from '@mui/material'
import { SlideIntro, SlideR, SlideL, SlideGif, SlideStat, SlideOutro } from '../utils/slideModules.jsx'

import klevis1Img from '../images/klevis/klevis1.png'
import klevis1MapImg from '../images/klevis/klevis1Map.png'
import klevis2KidImg from '../images/klevis/klevis2Kid.png'
import klevis5SeaImg from '../images/klevis/klevis5Sea.png'
import klevis3ShipImg from '../images/klevis/klevis3Ship.png'
import klevis8HomeImg from '../images/klevis/klevis8Home.png'
import klevis7QueueImg from '../images/klevis/klevis7Queue.png'
import klevis4ButtonGif from '../images/klevis/klevis4Button.gif'
import klevis6StadiumImg from '../images/klevis/klevis6Stadium.png'

const it = {
  paragraph1: 'e questa è la mia storia di <span>fuga dall\'Albania</span> nel <span>1991</span>, quando avevo solo 12 anni. La mia famiglia ha preso una decisione che ha segnato il nostro futuro: salire a bordo della <span>nave Vlora</span> e intraprendere un <span>viaggio verso l\'Italia</span>, in cerca di una <span>nuova vita</span>.',
  paragraph2: 'Sono nato nel <span>1979</span> a <span>Tirana</span>, capitale dell\'Albania. I miei genitori facevano sacrifici enormi per mantenere la famiglia, e io, <span>il maggiore di tre figli</span>, cercavo di aiutare come potevo. L\'Albania sotto il regime comunista era un <span>paese isolato</span> dove la <span>povertà</span> era diffusa, ma la nostra famiglia rimaneva unita, trovando sostegno l’uno nell’altro.',
  paragraph3: 'Nel 1991, <span>l\'Albania</span> era sull\'<span>orlo del collasso</span>. Un giorno, mentre ero in spiaggia con la mia famiglia, abbiamo visto la <span>nave Vlora</span> attraccata al porto. Era leggermente più grande delle altre e si diceva partisse per l\'Italia. Senza esitare, siamo <span>saliti a bordo</span>. Non sapevamo cosa ci avrebbe riservato il futuro, ma i miei genitori erano decisi a <span>cercare una vita migliore</span>. Lasciare l\'Albania non è stata una scelta facile; significava lasciare amici e tutto ciò che conoscevo. Ma in quel momento, la <span>speranza di un futuro diverso</span> era troppo forte per essere ignorata.',
  paragraph4: 'Ricordo che salire sulla Vlora è stato come aggrapparsi a un filo di speranza. La nave era <span>sovraccarica</span>, con migliaia di persone stipate sul ponte e nelle stive. Io ero solo un ragazzino, ma avevo capito subito che quel <span>viaggio</span> sarebbe stato <span>duro</span>. Non c\'era spazio per sedersi, né per muoversi. Eravamo stretti come sardine, senza cibo né acqua. Ricordo la stanchezza, la fame e la sete. Ogni ora sembrava un\'eternità. Ho visto persone disperate, pronte a tutto pur di sopravvivere. Alcuni si sono accoltellati per un tozzo di pane, altri sono morti di stenti.',
  paragraph5: 'Quando siamo finalmente sbarcati a <span>Bari</span>, ricordo una gran confusione. Le autorità italiane erano impreparate ad accogliere un numero così grande di migranti e dopo tante ore ci hanno portato nello stadio della città. Era una giornata calda e lo stadio, senza adeguati servizi, si è rivelato un luogo inadatto per ospitarci. La disorganizzazione era evidente, e molti di noi temevano di essere rimpatriati. Alcuni sono stati ingannati con la promessa di un trasferimento in un altro campo, ma in realtà sono stati rispediti in Albania. Io sono riuscito a <span>scappare</span> e a <span>evitare il rimpatrio</span>, ma la paura di essere rispedito indietro mi ha accompagnato per molto tempo.',
  paragraph6: 'I primi mesi in Italia furono difficili. Le <span>procedure burocratiche</span> erano <span>complesse e lunghe</span>. Inoltre, non tutti erano ben disposti nei nostri confronti. Tuttavia, non mancavano gli <span>atti di solidarietà</span>. Nonostante la situazione difficile i baresi si sono dimostrati molto umani nei nostri confronti, offrendoci cibo e vestiti. Grazie a loro, la mia famiglia è riuscita a trovare un alloggio temporaneo e a iniziare a <span>ricostruire una nuova vita</span>.',
  paragraph7: 'Oggi <span>vivo in Toscana</span>, nelle colline di <span>Siena</span>, un luogo che considero tra i più belli del mondo. Sono riuscito a costruire una nuova vita. Lavoro come <span>artigiano</span>. Ho una <span>moglie e due figli</span>. I ricordi del mio viaggio e delle difficoltà incontrate sono ancora vividi, ma sono anche un promemoria di quanto lontano sono arrivato. La mia storia è solo una delle tante, ma è una testimonianza di <span>coraggio</span>, <span>speranza</span> e <span>resilienza</span>. Spero che, raccontando la mia esperienza, possa ispirare altri a non arrendersi mai e a continuare a lottare per un futuro migliore.',
  paragraph8: '20 mila',
  paragraph9: 'persone provenienti dall’Albania al porto di Bari, 8 Agosto 1991',
  paragraph10: 'Prima pagina della “Gazzetta del Mezzogiorno”, 9 Agosto 1991',
  paragraph11: '1500',
  paragraph12: 'persone rimaste in Italia che avevano fatto domanda di asilo politico',
  paragraph13: 'Gazidede, Uljana. "30 anni di albanesi in Italia." 30 dicembre 2021',
  paragraph14: '417 mila',
  paragraph15: 'popolazione residente in Italia proveniente dall’Albania al 1 Gennaio 2023',
  paragraph16: 'ISTAT 2023',
  paragraph17: 'La storia di Klevis rappresenta solo una delle molte esperienze di migranti albanesi che hanno intrapreso viaggi verso l\'Italia nel 1991. Questi eventi hanno avuto un impatto significativo sulle politiche migratorie italiane e sull\'integrazione sociale dei migranti. La loro esperienza riflette la resilienza umana di fronte alle sfide, testimoniando le speranze e le difficoltà condivise da chi cerca una vita migliore oltre i confini nazionali.',
  paragraph18: 'uno di tanti'
}


const en = {
  paragraph1: 'and this is my story of <span>escaping from Albania</span> in <span>1991</span>, when I was only 12 years old. My family made a decision that marked our future: boarding the <span>ship Vlora</span> and embarking on a journey to Italy, in search of a <span>new life</span> .',
  paragraph2: 'I was born in <span>1979</span> in <span>Tirana</span>, the capital of Albania. My parents made enormous sacrifices to support the family, and I, <span>the eldest of three children</span>, tried to help however I could. Albania under the communist regime was an <span>isolated country</span> where <span>poverty</span> was widespread, but our family remained united, finding support in each other.',
  paragraph3: 'In 1991, <span>Albania</span> was on the <span>verge of collapse</span>. One day, while I was on the beach with my family, we saw the <span>Vlora ship</span> docked at the port. She was slightly older than the others and was said to be leaving for Italy. Without hesitation, we <span>jumped on board</span>. We didn\'t know what the future would hold for us, but my parents were determined to <span>seek a better life</span>. Leaving Albania was not an easy choice; it meant leaving friends and everything I knew. But at that moment, the <span>hope for a different future</span> was too strong to ignore.',
  paragraph4: 'I remember that getting on the Vlora was like holding on to a thread of hope. The ship was <span>overloaded</span>, with thousands of people crammed on deck and in the holds. I was just a kid, but I immediately understood that this <span>journey</span> would be <span>hard</span>. There was no room to sit or move. We were packed like sardines, without food or water. I remember the tiredness, the hunger and the thirst. Every hour seemed like an eternity. I saw desperate people, ready to do anything to survive. Some stabbed themselves for a crust of bread, others died of starvation.',
  paragraph5: 'When we finally landed in <span>Bari</span>, I remember a lot of confusion. The Italian authorities were unprepared to welcome such a large number of migrants and after many hours they took us to the city stadium. It was a hot day and the stadium, without adequate services, proved to be an unsuitable place to host us. The disorganization was evident, and many of us feared being repatriated. Some were deceived with the promise of a transfer to another camp, but in reality they were sent back to Albania. I managed to <span>escape</span> and <span>avoid repatriation</span>, but the fear of being sent back accompanied me for a long time.',
  paragraph6: 'The first months in Italy were difficult. The <span>bureaucratic procedures</span> were <span>complex and long</span>. Furthermore, not everyone was well disposed towards us. However, there was no shortage of <span>acts of solidarity</span>. Despite the difficult situation, the people of Bari proved to be very humane towards us, offering us food and clothes. Thanks to them, my family was able to find temporary accommodation and start <span>rebuilding a new life</span>.',
  paragraph7: 'Today <span>I live in Tuscany</span>, in the hills of <span>Siena</span>, a place that I consider among the most beautiful in the world. I managed to build a new life. I work as a <span>artisan</span>. I have a <span>wife and two children</span>. The memories of my journey and the difficulties I encountered are still vivid, but they are also a reminder of how far I have come. My story is just one of many, but it is a testament to <span>courage</span>, <span>hope</span> and <span>resilience</span>. I hope that by sharing my experience, I can inspire others to never give up and to continue fighting for a better future.',
  paragraph8: '20 thousand',
  paragraph9: 'people coming from Albania to the port of Bari, 8 August 1991',
  paragraph10: 'Front page of the “Gazzetta del Mezzogiorno”, 9 August 1991',
  paragraph11: '1500',
  paragraph12: 'people who remained in Italy who had applied for political asylum',
  paragraph13: 'Gazidede, Uljana. "30 years of Albanians in Italy." 30 December 2021',
  paragraph14: '417 thousand',
  paragraph15: 'population resident in Italy from Albania on 1 January 2023',
  paragraph16: 'ISTAT 2023',
  paragraph17: 'Klevis\' story represents just one of the many experiences of Albanian migrants who undertook journeys to Italy in 1991. These events had a significant impact on Italian migration policies and the social integration of migrants. Their experience reflects human resilience in the face of challenges, bearing witness to the hopes and difficulties shared by those seeking a better life beyond national borders.',
  paragraph18: 'one of many'
}

const Klevis = ({ selectedLang }) => {
  let lang = selectedLang ? en : it
  return (
    <>
      <Box sx={{ width: '100%', paddingX: 6, paddingY: 10, boxSizing: 'border-box' }}>
        {SlideIntro('KLEVIS', klevis1MapImg, klevis1Img, lang.paragraph1)}
        {SlideR(lang.paragraph2, klevis2KidImg)}
        {SlideR(lang.paragraph3, klevis3ShipImg)}
        {SlideGif(klevis4ButtonGif)}
        {SlideL(lang.paragraph4, klevis5SeaImg)}
        {SlideR(lang.paragraph5, klevis6StadiumImg)}
        {SlideR(lang.paragraph6, klevis7QueueImg)}
        {SlideL(lang.paragraph7, klevis8HomeImg)}
      </Box>
      {SlideStat(lang.paragraph8, lang.paragraph9, lang.paragraph10)}
      {SlideStat(lang.paragraph11, lang.paragraph12, lang.paragraph13)}
      {SlideStat(lang.paragraph14, lang.paragraph15, lang.paragraph16)}
      {SlideOutro(lang.paragraph17, 'I\'m KLEVIS', lang.paragraph18)}
    </>
  )
}

export default Klevis
