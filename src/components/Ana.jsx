import { Box } from '@mui/material'
import { SlideIntro, SlideR, SlideL, SlideGif, SlideStat, SlideOutro } from '../utils/slideModules.jsx'

import ana1Img from '../images/ana/ana1.webp'
import ana1MapImg from '../images/ana/ana1Map.webp'
import ana2DadImg from '../images/ana/ana2Dad.webp'
import ana7DadImg from '../images/ana/ana7Dad.webp'
import ana3TeenImg from '../images/ana/ana3Teen.webp'
import ana5QueueImg from '../images/ana/ana5Queue.webp'
import ana4TractorGif from '../images/ana/ana4Tractor.gif'
import ana6ShoppingImg from '../images/ana/ana6Shopping.webp'

const it = {
  paragraph1: 'ho <span>40 anni</span> e questa è la mia storia di <span>fuga dalla Romania</span> con la mia famiglia all\'inizio degli anni \'90, in cerca di una <span>vita migliore</span> in Italia.',
  paragraph2: 'Sono nata a <span>Bucarest</span>, la capitale della Romania, durante gli ultimi anni del regime comunista. La mia <span>infanzia</span> è stata segnata da <span>difficoltà economiche</span> della mia famiglia. Mio <span>padre</span>, un <span>operaio</span>, faceva molti sacrifici per mantenere la famiglia, mentre mia <span>madre</span> era un <span>insegnante</span>.',
  paragraph3: 'Nel <span>1995</span>, quando avevo 11 anni, la nostra famiglia deciso di <span>lasciare la Romania</span> per cercare opportunità di lavoro migliori e una <span>vita più sicura.</span>',
  paragraph4: 'Il nostro arrivo in Italia è stato pieno di difficoltà, soprattutto con la burocrazia per il <span>permesso di soggiorno</span>. I documenti e le autorizzazioni sembravano <span>non</span> finire mai e non sempre <span>ci sentivamo ben accolti</span>. La lingua rappresentava una grande barriera; nonostante avessimo imparato l\'italiano di base.',
  paragraph5: 'Le discriminazioni non erano rare. A scuola ho dovuto affrontare <span>pregiudizi e stereotipi</span>, mia madre veniva spesso trattata con sospetto o disprezzo da alcuni italiani, mio padre doveva lottare per ogni opportunità di lavoro che gli si presentava.',
  paragraph6: 'Nonostante queste difficoltà, abbiamo ricevuto sostegno da molte persone che ci hanno aiutato ad <span>integrarci nella società</span>. Oggi, dopo molti anni, mi considero fortunata. Siamo riusciti a costruire una <span>vita dignitosa</span> qui in Italia. Ho studiato e ho trovato lavoro nel settore dell\'ospitalità, mia madre lavora nel settore dei servizi, mentre mio padre ha trovato una posizione stabile in una fabbrica.',
  paragraph7: '602 mila',
  paragraph8: 'lavoratori romeni in Italia',
  paragraph9: 'Banca dati INPS',
  paragraph10: '128 mila',
  paragraph11: 'lavoratori domestici',
  paragraph12: 'La storia di Ana é una delle molte testimonianze dell\'emigrazione romena in Italia. Nonostante le difficoltà iniziali, hanno costruito una vita migliore nel loro nuovo paese. Questo non solo supporta la crescita economica, ma arricchisce anche il tessuto sociale e culturale dell\'Italia, dimostrando il valore dell\'immigrazione come risorsa positiva per entrambi i paesi.',
  paragraph13: 'una di tante'
}

const en = {
  paragraph1: 'I am <span>40 years old</span> and this is my story of <span>escape from Romania</span> with my family in the early \'90s, in search of a <span>better life</span> in Italy.',
  paragraph2: 'I was born in <span>Bucharest</span>, the capital of Romania, during the last years of the communist regime.  My <span>childhood</span> was marked by <span>economic difficulties</span> of my family. My <span>father</span>, a <span>worker</span> , made many sacrifices to support the family, while my <span>mother</span> he was a <span>teacher</span>.',
  paragraph3: 'In <span>1995</span>, when I was 11 years old, our family decided to <span>leave Romania</span> to seek better job opportunities and a <span>safer life.</span>',
  paragraph4: 'Our arrival in Italy was full of difficulties, especially with the bureaucracy for the <span>residence permit</span>. The paperwork and authorizations seemed to <span>never</span> end and <span>we didn\'t always feel welcome</span>. Language was a big barrier; even though we had learned basic Italian.',
  paragraph5: 'Discrimination was not uncommon. At school I had to face <span>prejudices and stereotypes</span>, my mother was often treated with suspicion or contempt by some Italians, my father had to fight for every job opportunity that came his way.',
  paragraph6: 'Despite these difficulties, we received support from many people who helped us <span>integrate into society</span>. Today, after many years, I consider myself lucky. We have managed to build a <span>dignified life</span> here in Italy. I studied and found work in the hospitality sector, my mother works in the service sector, while my father found a stable position in a factory.',
  paragraph7: '602 thousand',
  paragraph8: 'Romanian workers in Italy',
  paragraph9: 'INPS database',
  paragraph10: '128 thousand',
  paragraph11: 'domestic workers',
  paragraph12: 'The story of Ana is one of many testimonies of Romanian migration to Italy. Despite initial difficulties, they have built a better life in their new country. This not only supports economic growth but also enriches the social and cultural fabric of Italy, demonstrating the value of immigration as a positive resource for both countries.',
  paragraph13: 'one of many'
}

const Ana = ({ selectedLang }) => {
  let lang = selectedLang ? en : it
  return (
    <>
      <Box sx={{ width: '100%', paddingX: 3, paddingY: 10, boxSizing: 'border-box' }}>
        {SlideIntro('ANA', ana1MapImg, ana1Img, lang.paragraph1)}
        {SlideR(lang.paragraph2, ana2DadImg)}
        {SlideR(lang.paragraph3, ana3TeenImg)}
        {SlideGif(ana4TractorGif)}
        {SlideL(lang.paragraph4, ana5QueueImg)}
        {SlideR(lang.paragraph5, ana6ShoppingImg)}
        {SlideL(lang.paragraph6, ana7DadImg)}
      </Box>
      {SlideStat(lang.paragraph7, lang.paragraph8, lang.paragraph9)}
      {SlideStat(lang.paragraph10, lang.paragraph11, lang.paragraph9)}
      {SlideOutro(lang.paragraph12, 'I\'m ANA', lang.paragraph13)}
    </>
  )
}

export default Ana
