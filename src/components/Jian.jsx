import { Box } from '@mui/material'
import { SlideIntro, SlideR, SlideL, SlideGif, SlideStat, SlideOutro } from '../utils/slideModules.jsx'

import jian1Img from '../images/jian/jian1.webp'
import jian1MapImg from '../images/jian/jian1Map.webp'
import jian9JobImg from '../images/jian/jian9Job.webp'
import jian4CCTVGif from '../images/jian/jian4CCTV.gif'
import jian3TownImg from '../images/jian/jian3Town.webp'
import jian7TeenImg from '../images/jian/jian7Teen.webp'
import jian2FamilyImg from '../images/jian/jian2Family.webp'
import jian5DiningImg from '../images/jian/jian5Dining.webp'
import jian6StreetImg from '../images/jian/jian6Street.webp'
import jian8EmployeeImg from '../images/jian/jian8Employee.webp'

const it = {
  paragraph1: 'ho <span>42 anni</span> e questa è la mia storia di <span>fuga dalla Cina</span> nel 1998, <span>in cerca di una vita migliore</span> in Europa.',
  paragraph2: 'Sono <span>nato a Wuhan</span>, una grande città della Cina centrale. Sono cresciuto in una famiglia di classe media, con mio <span>padre ingegnere</span> e mia <span>madre insegnante</span>. La mia infanzia è stata segnata dalle <span>difficoltà economiche</span> e dalle <span>politiche rigide</span> del governo cinese.',
  paragraph3: 'La vita a Wuhan non era facile. Il nostro quartiere era affollato e rumoroso. <span>Il governo limitava la libertà personale</span> e ciò rendeva difficile per le famiglie come la nostra migliorare la propria condizione economica. La <span>censura</span> e la mancanza di libertà di espressione erano una realtà quotidiana, e il controllo statale permeava ogni aspetto della vita',
  paragraph4: 'Fin da giovane, ho sognato una vita diversa, lontana dalle restrizioni politiche e dalle limitazioni economiche del mio paese. Ricordo le sere passate a parlare con i miei genitori delle <span>possibilità che potevano esistere al di fuori della Cina</span>. Leggevamo libri e guardavamo documentari su paesi lontani, immaginando come sarebbe stato vivere in un luogo dove la libertà e le opportunità erano più abbondanti. Volevo esplorare nuove idee e sviluppare il mio potenziale in un ambiente più aperto e stimolante.',
  paragraph5: 'Nel <span>1998</span>, la situazione economica della mia famiglia è peggiorata a causa della <span>crisi finanziaria asiatica</span>. Le prospettive di un futuro migliore sembravano sempre più lontane. Il desiderio di vivere in un paese con maggiore libertà di espressione e migliori opportunità mi spingeva a cercare una nuova vita all\'estero. Ho deciso di <span>partire per l’Italia</span> insieme a mio fratello',
  paragraph6: 'Sono arrivato in <span>Italia</span> con un <span>visto studentesco</span>. <span>Ottenere i documenti</span> necessari per rimanere nel paese era un <span>processo lungo e stressante</span>, e spesso mi trovavo a dover navigare tra norme e regolamenti che non capivo. Infatti, le <span>difficoltà linguistiche</span> erano una barriera significativa. Mi sentivo spesso isolato e incapace di esprimermi completamente.',
  paragraph7: 'Inoltre, ho affrontato <span>discriminazioni e pregiudizi</span>. Quando ho compiuto 18 anni volevo trovare un lavoro part-time per sostenere i miei studi ma era complicato: molti datori di lavoro <span>non volevano assumere stranieri</span>, soprattutto se non parlavano perfettamente la lingua. Mi sono trovato a lavorare in condizioni difficili e <span>spesso sottopagato</span>.',
  paragraph8: 'Frequentando lezioni di italiano e partecipando a programmi di integrazione, ho iniziato a fare amicizie sia con persone del posto, che con persone che venivano da ogni parte del mondo e ho iniziato a <span>sentirmi meno solo</span>. Dopo diversi anni di sacrifici, sono riuscito a ottenere un <span>lavoro stabile</span>. Oggi sono un <span>cittadino italiano</span>, lavoro come ingegnere e cerco di aiutare altri nuovi arrivati ad affrontare le stesse difficoltà che ho incontrato io.',
  paragraph9: '284 mila',
  paragraph10: 'cinesi regolarmente soggiornanti in Italia al 1 Gennaio 2023',
  paragraph11: 'Rapporto comunità cinese in Italia 2023',
  paragraph12: '2% del PIL italiano',
  paragraph13: 'è contribuito dagli immigrati cinesi',
  paragraph14: 'ISTAT 2022',
  paragraph15: 'La storia di Jian Li è una delle molte testimonianze dell\'emigrazione cinese in Italia. Nonostante le difficoltà, è riuscito a costruire una vita migliore nel loro nuovo paese. È importante riconoscere che i lavoratori cinesi contribuiscono significativamente all\'economia italiana, rappresentando il 2% del PIL annuale. Questo non solo supporta la crescita economica, ma arricchisce anche il tessuto sociale e culturale dell\'Italia, dimostrando il valore dell\'immigrazione come risorsa positiva per entrambi i paesi.',
  paragraph16: 'uno di tanti'
}

const en = {
  paragraph1: 'I am <span>42 years old</span> and this is my story of <span>escape from China</span> in 1998, <span>in search of a better life </span> in Europe.',
  paragraph2: 'I was <span>born in Wuhan</span>, a large city in central China. I grew up in a middle class family, with my <span>engineer father</span> and my <span>teacher mother</span>. My childhood was marked by <span>economic difficulties</span> and the <span></span>rigid policies</span> of the Chinese government.',
  paragraph3: 'Life in Wuhan wasn\'t easy. Our neighborhood was crowded and noisy. <span>The government limited personal freedom</span> and this made difficult for families like ours to improve their economic condition. Censorship and lack of freedom of expression were an everyday reality, and state control permeated every aspect of life.',
  paragraph4: 'Since I was young, I have dreamed of a different life, far from the political restrictions and economic limitations of my country. I remember the evenings spent talking with my parents about the <span>possibilities that could exist outside China</span>. We read books and watched documentaries about distant lands, imagining what it would be like to live in a place where freedom and opportunities were more abundant. I wanted to explore new ideas and develop my potential in a more open and stimulating environment.',
  paragraph5: 'In <span>1998</span>, my family\'s economic situation worsened due to the <span>Asian financial crisis</span>. The prospects of a better future seemed increasingly distant. The desire to live in a country with greater freedom of expression and better opportunities pushed me to look for a new life abroad. I decided to <span>leave for Italy</span> together with my brother',
  paragraph6: 'I arrived in <span>Italy</span> with a <span>student visa</span>. <span>Obtaining the documents</span> needed to stay in the country was a <span>long and stressful process</span>, and I often found myself having to navigate between rules and regulations that I didn\'t understand. In fact, <span>language difficulties</span> were a significant barrier. I often felt isolated and unable to express myself completely.',
  paragraph7: 'Also, I faced <span>discrimination and prejudice</span>. When I turned 18 I wanted to find a part-time job to support my studies but it was complicated: many employers <span>did not want to hire foreigners</span>, especially if they did not speak the language perfectly. I found myself working in difficult conditions and <span>often underpaid</span>.',
  paragraph8: 'By attending Italian lessons and participating in integration programmes, I began to make friends both with local people and with people who came from from all over the world and I started to <span>feel less alone</span>. After several years of sacrifices, I managed to obtain a stable job. Today I am an <span>Italian citizen</span>, I work as an engineer and I try to help other newcomers to face the same difficulties that I have met me.',
  paragraph9: '284 thousand',
  paragraph10: 'Chinese legally residing in Italy as of 1 January 2023',
  paragraph11: 'Chinese community report in Italy 2023',
  paragraph12: '2% of Italian GDP',
  paragraph13: 'is contributed by Chinese immigrants',
  paragraph14: 'ISTAT 2022',
  paragraph15: 'Jian Li\'s story is one of many testimonies of Chinese emigration to Italy. Despite the difficulties, he managed to build a better life in their new country. It is important to recognize that Chinese workers contribute significantly to the Italian economy, accounting for 2% of annual GDP. This not only supports economic growth , but it also enriches the social and cultural fabric of Italy, demonstrating the value of immigration as a positive resource for both countries.',
  paragraph16: 'one of many'
}

const Jian = ({ selectedLang }) => {
  const lang = selectedLang ? en : it
  return (
    <>
      <Box sx={{ width: '100%', paddingX: 3, paddingY: 10, boxSizing: 'border-box' }}>
        {SlideIntro('JIAN LI', jian1MapImg, jian1Img, lang.paragraph1)}
        {SlideR(lang.paragraph2, jian2FamilyImg)}
        {SlideR(lang.paragraph3, jian3TownImg)}
        {SlideGif(jian4CCTVGif)}
        {SlideR(lang.paragraph4, jian5DiningImg)}
        {SlideL(lang.paragraph5, jian6StreetImg)}
        {SlideR(lang.paragraph6, jian7TeenImg)}
        {SlideR(lang.paragraph7, jian8EmployeeImg)}
        {SlideL(lang.paragraph8, jian9JobImg)}
      </Box>
      {SlideStat(lang.paragraph9, lang.paragraph10, lang.paragraph11)}
      {SlideStat(lang.paragraph12, lang.paragraph13, lang.paragraph14)}
      {SlideOutro(lang.paragraph15, 'I\'m JIAN LI', lang.paragraph16)}
    </>
  )
}

export default Jian
