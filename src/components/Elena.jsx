import { Box } from '@mui/material'
import { SlideIntro, SlideR, SlideL, SlideGif, SlideStat, SlideOutro } from '../utils/slideModules.jsx'

import elena1Img from '../images/elena/elena1.webp'
import elena8EyeImg from '../images/elena/elena8Eye.webp'
import elena1MapImg from '../images/elena/elena1Map.webp'
import elena5TramImg from '../images/elena/elena5Tram.webp'
import elena4TrainGif from '../images/elena/elena4Train.gif'
import elena2FamilyImg from '../images/elena/elena2Family.webp'
import elena7FriendImg from '../images/elena/elena7Friend.webp'
import elena6DaughterImg from '../images/elena/elena6Daughter.webp'
import elena3ApocalypseImg from '../images/elena/elena3Apocalypse.webp'

const it = {
  paragraph1: 'ho 38 anni e questa è la mia storia di <span>fuga dall\'Ucraina</span> nel 2022, in cerca di una vita migliore in Italia.',
  paragraph2: 'Sono originaria di <span>Marganets</span>, una città vicino a Nikopol e Zaporižžja, nell\'Ucraina sudorientale. Vivevo lì con mio <span>marito</span>, le nostre <span>due figlie</span> e <span>la gatta</span> Malinka. Marganets era la nostra casa, un luogo di ricordi e affetti.',
  paragraph3: 'Il 24 febbraio 2022, l\'<span>invasione russa</span> dell\'Ucraina ha cambiato tutto. I missili, i rifugi, le bombe: i miei ricordi si confondono in un caos di paura e distruzione. Poche ore dopo l\'inizio dell\'invasione, ho deciso di <span>partire con le mie figlie</span> e Malinka. Mio marito è rimasto a casa, così come le mie sorelle e i loro figli.',
  paragraph4: 'Abbiamo preso un <span>treno</span> per Zaporižžja, poi per Lviv, e infine abbiamo lasciato il paese dalla frontiera polacca. Ricordo i treni pieni di persone, le file per salire sui vagoni e tutti gli sfollati di Mariupol sul primo treno per Zaporižžja. La decisione di partire è stata presa in due ore. Volevo restare in <span>Polonia</span>, ma <span>non c\'era più posto</span>, così ci hanno caricate su un <span>pullman</span> e portate in Italia, a Pontecorvo, in <span>provincia di Frosinone</span>.',
  paragraph5: 'Quando siamo arrivate in Italia, non conoscevo nessuno. Un uomo ci ha <span>offerto un monolocale</span>, la <span>Caritas</span> ci portava la spesa e ho potuto beneficiare del contributo del governo italiano per i primi tre mesi. Mia figlia più piccola andava a scuola, mentre la più grande, che studiava giurisprudenza in Ucraina, ha lavorato online per un call center ucraino. Io <span>non sono riuscita a trovare un lavoro</span> perché il paese dove alloggiavamo era troppo piccolo e io non parlavo italiano. Ma all\'inizio di Febbraio, quasi un anno dopo l\'inizio della guerra, l\'uomo che ci ospitava ci ha chiesto di pagare l\'affitto. "<span>O paghi, o te ne vai</span>", ci ha detto.',
  paragraph6: 'Ho capito che non ce l\'avrei fatta a <span>pagare l\'affitto</span>, così abbiamo lasciato Pontecorvo. Abbiamo ripreso in braccio la gatta e siamo andate a Roma: una donna, due ragazze e la loro gatta.<span> Abbiamo ricominciato da capo</span> un anno dopo la fuga dall\'Ucraina. Abbiamo preso un <span>treno</span> e chiesto aiuto all\'hotel Capannelle, un <span>hub di prima accoglienza</span> allestito dalla Protezione civile per <span>ospitare gli ucraini nell\'emergenza</span>. Questo hotel dovrebbe essere già chiuso, ma continua a funzionare perché gli arrivi non sono finiti e molte persone come noi non sono ancora sistemate.',
  paragraph7: 'Ora che mi sono trasferita nell\'hotel, non è tanto il mio futuro o quello delle mie figlie a preoccuparmi. Quello che mi tormenta davvero è la situazione di chi è rimasto a casa: <span>la mia testa è ancora in Ucraina</span>. Sto pensando di tornare in Ucraina per prendere e portare con me in Italia anche i nipoti, i figli delle mie sorelle. Questo mi farebbe sentire utile e <span>allevierebbe il senso di colpa</span> che provo per essere andata via, nonostante la mia città sia ancora sulla linea del fronte.',
  paragraph8: '6,5 milioni',
  paragraph9: 'di rifugiati ucraini che hanno cercato riparo fuori dal proprio paese',
  paragraph10: 'UNHCR dati del Rapporto 2024',
  paragraph11: '3,7 milioni',
  paragraph12: 'ancora sfollati in Ucraina',
  paragraph13: '40% della popolazione',
  paragraph14: 'ha bisogno di aiuti umanitari ma i finanziamenti coprono il 13% dei bisogni',
  paragraph15: '72% ucraini in Italia',
  paragraph16: 'possiede una formazione universitaria',
  paragraph17: 'Sondaggio di analisi socioeconomica della popolazione Ucraina arrivata in Italia da Febbraio 2022',
  paragraph18: '30% ucraini in Italia',
  paragraph19: 'in età lavorativa parla italiano',
  paragraph20: 'Da questi dati emerge che la storia di Elena rappresenta una delle tante testimonianze dei rifugiati ucraini in Italia. Nonostante le sfide e la necessità di aiuti umanitari, i rifugiati dimostrano una forte volontà di integrarsi e ricostruire una vita migliore. La comunità ucraina in Italia è composta per la maggior parte da persone istruite, pronte ad affrontare le difficoltà dell\'adattamento.',
  paragraph21: 'una di tante'
}

const en = {
  paragraph1: 'I\'m 38 years old and this is my story of <span>escape from Ukraine</span> in 2022, in search of a better life in Italy.',
  paragraph2: 'I am originally from <span>Marganets</span>, a city near Nikopol and Zaporozhye, in south-eastern Ukraine. I lived there with my <span>husband</span>, our <span>two daughters</span> and <span>the cat</span> Malinka. Marganets was our home, a place of memories and affections.',
  paragraph3: 'On February 24, 2022, the <span>Russian invasion</span>of Ukraine changed everything. The missiles, the shelters, the bombs: my memories are mixed up in a chaos of fear and destruction. A few hours after the invasion began, I decided to <span>leave with my daughters</span> and Malinka. My husband stayed at home, as did my sisters and their children.',
  paragraph4: 'We took a <span>train</span> to Zaporižžja, then to Lviv, and finally we left the country from the Polish border. I remember the trains full of people, the queues to get on the carriages and all the displaced people from Mariupol on the first train to Zaporižžja. The decision to leave was made in two hours. I wanted to stay in <span>Poland</span>, but <span>there was no more room</span>, so they put us on a <span>coach</span> and brought to Italy, to Pontecorvo, in the <span>province of Frosinone</span>.',
  paragraph5: 'When we arrived in Italy, I didn\'t know anyone. A man <span>offered us a studio apartment</span>, <span>Caritas</span> brought us the shopping and I was able to benefit from the government contribution Italian for the first three months. My youngest children went to school, while the eldest, who was studying law in Ukraine, worked online for a Ukrainian call center. I <span>wasn\'t able to find a job</span> because the town where we were staying was too small and I didn\'t speak Italian. But at the beginning of February, almost a year after the war began, the man who was hosting us asked us to pay the rent. "<span >Either you pay, or you leave</span>", he told us.',
  paragraph6: 'I realized that I wouldn\'t be able to<span>pay the rent</span>, so we left Pontecorvo. We picked up the cat again and went to Rome: a woman, two girls and their cat.<span>We started all over again</span> a year after fleeing Ukraine. We took a <span>train</span> and asked for help at the hotel Capannelle, a <span>first reception hub</span> set up by the Protection civilian to <span>host the Ukrainians in the emergency</span>. This hotel should already be closed, but it continues to operate because the arrivals are not finished and many people like us are not settled yet.',
  paragraph7: 'Now that I\'ve moved into the hotel, it\'s not so much my future or that of my daughters that I\'m worried about. What really torments me is the situation of those who remained at home: <span>my head is still in Ukraine</span>. I am thinking of returning to Ukraine to take and bring with me to Italy my nephews, the children of my sisters. This would make me feel useful and<span>would alleviate the sense of guilt</span> that I feel for having left, even though my city is still on the line of forehead.',
  paragraph8: '6.5 million',
  paragraph9: 'of Ukrainian refugees who have sought refuge outside their country',
  paragraph10: 'UNHCR Data Report 2024',
  paragraph11: '3.7 million',
  paragraph12: 'still displaced in Ukraine',
  paragraph13: '40% of the population',
  paragraph14: 'needs humanitarian aid but funding covers 13% of needs',
  paragraph15: '72% Ukrainians in Italy',
  paragraph16: 'has a university education',
  paragraph17: 'Socioeconomic analysis survey of the Ukrainian population arriving in Italy since February 2022',
  paragraph18: '30% Ukrainians in Italy',
  paragraph19: 'of working age he speaks Italian',
  paragraph20: 'From these data it emerges thatElena\'s story represents one of the many testimonies of Ukrainian refugees inItaly. Despite the challenges and the need for humanitarian aid, refugees demonstrate a strong will to integrate and rebuild a better life. The Ukrainian community in Italy is composed mostly of educated people, ready to face the difficulties of adaptation.',
  paragraph21: 'one of many'
}

const Kito = ({ selectedLang }) => {
  const lang = selectedLang ? en : it
  return (
    <>
      <Box sx={{ width: '100%', paddingX: 3, paddingY: 10, boxSizing: 'border-box' }}>
        {SlideIntro('ELENA', elena1MapImg, elena1Img, lang.paragraph1)}
        {SlideR(lang.paragraph2, elena2FamilyImg)}
        {SlideR(lang.paragraph3, elena3ApocalypseImg)}
        {SlideGif(elena4TrainGif)}
        {SlideL(lang.paragraph4, elena5TramImg)}
        {SlideR(lang.paragraph5, elena6DaughterImg)}
        {SlideR(lang.paragraph6, elena7FriendImg)}
        {SlideL(lang.paragraph7, elena8EyeImg)}
      </Box>
      {SlideStat(lang.paragraph8, lang.paragraph9, lang.paragraph10)}
      {SlideStat(lang.paragraph11, lang.paragraph12, lang.paragraph10)}
      {SlideStat(lang.paragraph13, lang.paragraph14, lang.paragraph10)}
      {SlideStat(lang.paragraph15, lang.paragraph16, lang.paragraph17)}
      {SlideStat(lang.paragraph18, lang.paragraph19, lang.paragraph17)}
      {SlideOutro(lang.paragraph20, 'I\'m ELENA', lang.paragraph21)}
    </>
  )
}

export default Kito
