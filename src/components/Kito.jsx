import parse from 'html-react-parser'
import { Box } from '@mui/material'

import kito1Img from '../images/kito/kito1.png'
import kito5SeaImg from '../images/kito/kito5Sea.png'
import kito4CarGif from '../images/kito/kito4Car.gif'
import kito2KidsImg from '../images/kito/kito2Kids.png'
import kito7CampImg from '../images/kito/kito7Camp.png'
import kito8BackImg from '../images/kito/kito8Back.png'
import kito1ShadowImg from '../images/kito/kito1Map.png'
import kito3WorkerImg from '../images/kito/kito3Worker.png'
import kito6GangRaftImg from '../images/kito/kito6GangRaft.png'

const it = {
  paragraph1: 'e questa è la mia storia di <span>fuga dal Congo</span>, nel 2020, in cerca di una vita migliore in Europa.',
  paragraph2: 'Sono originario di <span>Kinshasa</span>, capitale della Repubblica Democratica del Congo. Con una popolazione di oltre 17 milioni di abitanti è la città più popolosa della Repubblica Democratica del Congo e dell\'intera Africa, ma anche un luogo segnato da enormi disuguaglianze economiche e sociali. A Kinshasa ero un <span> meccanico</span> e vivevo con <span>mia moglie e tre figli</span>.',
  paragraph3: 'La mia officina era il mio orgoglio e fontedi sostentamento per la mia famiglia. Tuttavia, la situazione economica e politica del mio paese era instabile. Le tensioni politiche, la corruzione dilagante e l\'<span>assenza di opportunità lavorative dignitose</span> rendevano la vita quotidiana una lotta continua. Sognavo di poter guadagnare abbastanza in Europa per inviare denaro alla mia famiglia e permetterle una vita migliore.',
  paragraph4: 'Nel 2020, ho deciso di <span>partire da solo</span> per cercare una vita migliore in Europa. La decisione non è stata facile, ma sentivo che non avevo altra scelta se non quella di lasciare il mio paese nella speranza di trovare migliori opportunità altrove. Volevo <span>garantire un futuro</span> dignitoso <span>alla mia famiglia</span> e speravo di trovare lavoro facilmente, data la mia esperienza come meccanico. Il <span>viaggio</span> è stato <span>lungo e pericoloso</span>. <span>Abbiamo rischiato la vita </span> molte volte, ma la speranza di un futuro migliore mi ha dato la forza di andare avanti.',
  paragraph5: 'Sono arrivato sull\'<span>isola greca</span> di Lesbo, uno dei principali punti di ingresso per i rifugiati in Europa. Tuttavia, la realtà era ben diversa dalle mie aspettative. La mia <span>richiesta d\'asilo</span> è stata <span>rigettata</span> più volte, lasciandomi intrappolato in un limbo. Vivere in continua incertezza è estenuante. Ogni giorno era una lotta per mantenere la speranza, mentre le prospettive di trovare un lavoro stabile sembravano sempre più lontane.',
  paragraph6: 'Inizialmente, sono stato <span>accolto</span> nel <span>campo di Moria</span>, che era progettato per ospitare circa 2.800 persone, ma conteneva oltre 20.000 rifugiati. Le condizioni erano disumane: <span>mancanza di servizi igienici adeguati</span>, sovraffollamento, <span>carenze di cibo e acqua potabile</span>. La tensione e la disperazione tra i rifugiati erano palpabili.',
  paragraph7: 'Ora che sono in <span>Europa</span>, le mie preoccupazioni non sono diminuite, anzi, si sono trasformate. La mia mente è divisa tra il pensiero per la mia famiglia rimasta in Congo e le difficoltà che affronto qui. Ogni giorno mi chiedo se riuscirò a trovare un <span>lavoro stabile</span> e sicuro che mi permetta di inviare denaro a casa. La situazione economica di mia moglie e dei miei figli in Congo è sempre più precaria, e la loro <span>dipendenza dal mio sostegno economico</span> è totale.',
  paragraph8: '114 milioni',
  paragraph9: 'di persone nel mondo che sono state costrette a fuggire',
  paragraph10: 'UNHCR dati del Rapporto sugli indicatori del Patto Globale sui Rifugiati 2023',
  paragraph11: '36,4 milioni',
  paragraph12: 'rifugiati nel mondo nel 2023',
  paragraph13: '948 mila',
  paragraph14: 'rifugiati provenienti dalla Repubblica Democratica del Congo',
  paragraph15: 'Questi dati mostrano che la storia di Kito è comune a molti altri rifugiati. Nonostante l\'alto numero di persone che cercano una nuova vita nell\'UE, solo una piccola percentuale riesce a ottenere lo status di rifugiato e trovare lavoro stabile. Molti rifugiati vivono in condizioni difficili, con accesso limitato a risorse essenziali e opportunità di integrazione.',
  paragraph16: 'uno di tanti'
}

const en = {
  paragraph1: 'and this is my story of <span>escaping from Congo</span>, in 2020, in search of a better life in Europe.',
  paragraph2: 'I am originally from <span>Kinshasa</span>, capital of the Democratic Republic of Congo. With a population of over 17 million inhabitants, it is the most populous city in the Democratic Republic of Congo and in the whole of Africa, but also a place marked by enormous economic and social inequalities. In Kinshasa I was a <span> mechanic</span> and I lived with <span>my wife and three children</span>.',
  paragraph3: 'My workshop was my pride and source of livelihood for my family. However, the economic and political situation in my country was unstable. Political tensions, rampant corruption and the absence of decent work opportunities made daily life a constant struggle. I dreamed of being able to earn enough in Europe to send money to my family and allow them a better life.',
  paragraph4: 'In 2020, I decided to <span>leave alone</span> to seek a better life in Europe. The decision was not easy, but I felt that I had no choice but to leave my country in the hope of finding better opportunities elsewhere. I wanted to <span>guarantee a dignified future</span> for my family</span> and I hoped to find work easily, given my experience as a mechanical. The <span>journey</span> was <span>long and dangerous</span>. <span>We risked our lives </span> many times, but the hope of a better future gave me the strength to move forward.',
  paragraph5: 'I have arrived on the <span>Greek island</span> of Lesbos, one of the main entry points for refugees into Europe. However, the reality was very different from my expectations. My <span>asylum request</span> has been <span>rejected</span> several times, leaving me trapped in limbo. Living in constant uncertainty is  exhausting. Every day was a struggle to maintain hope, while the prospects of finding stable work seemed increasingly distant.',
  paragraph6: 'Initially, I was <span>welcomed</span> into <span>Moria camp</span>, which was designed to house around 2,800 people, but contained over 20,000 refugees. The conditions were inhumane: <span>lack of adequate sanitation</span>, overcrowding, <span>shortages of food and drinking water</span>. The tension and desperation among the refugees was palpable.',
  paragraph7: 'Now that I am in <span>Europe</span>, my worries have not diminished, on the contrary, they have transformed. My mind is divided between thinking about my family left in Congo and the difficulties I face here. Every day I wonder if I will be able to find a <span>stable</span> and safe job that will allow me to send money home. The economic situation of my wife and children in Congo is increasingly precarious, and their <span>dependence on my economic support</span> is total .',
  paragraph8: '114 million',
  paragraph9: 'of people around the world who have been forced to flee',
  paragraph10: 'UNHCR data from the Global Compact on Refugees Indicators Report 2023',
  paragraph11: '36.4 million',
  paragraph12: 'refugees in the world in 2023',
  paragraph13: '948 thousand',
  paragraph14: 'refugees from the Democratic Republic of Congo',
  paragraph15: 'These data show that Kito\'s story is common to many other refugees. Despite the high number of people seeking a new life in the EU, only a small percentage manages to obtain refugee status and find stable work. Many refugees live in difficult conditions, with limited access to essential resources and opportunities for integration.',
  paragraph16: 'one of many'
}

const SlideR = (p, img) => {
  return (
    <Box sx={{ marginBottom: '5vw', display: 'flex', alignItems: 'center' }}>
      <p style={{ height: '50%', fontSize: '2vw', marginRight: '5vw' }}>{parse(p)}</p>
      <img src={img} alt="journey image" style={{ width: '40vw' }}/>
    </Box>
  )
}

const SlideL = (p, img) => {
  return (
    <Box sx={{ marginBottom: '5vw', display: 'flex', alignItems: 'center' }}>
      <img src={img} alt="journey image" style={{ width: '40vw' }}/>
      <p style={{ fontSize: '2vw', marginLeft: '5vw' }}>{parse(p)}</p>
    </Box>
  )
}

const Kito = ({ selectedIndex }) => {
  let lang = selectedIndex ? en : it
  return (
    <>
      <Box sx={{ width: '100%', padding: '0 2rem', boxSizing: 'border-box' }}>
        <Box sx={{ marginBottom: '5vw', display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 700 }}>
          <p
            style={{
              width: '100%',
              height: 'fit-content',
              margin: 0,
              fontSize: '15vw',
              textAlign: 'start',
              color: 'hsla(357.29, 92.248%, 45.935%)'
            }}
          >I&#39;m</p>
          <p
            style={{
              width: '100%',
              fontSize: '20vw',
              margin: 0,
              textAlign: 'end'
            }}
          >KITO</p>
        </Box>
        <Box sx={{ marginBottom: '5vw', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <img
            src={kito1ShadowImg}
            style={{
              width: '50vw',
              position: 'absolute',
              top: -50,
              right: 0,
              zIndex: -1
            }}
          />
          <img src={kito1Img} alt="journey image" style={{ width: '50vw', maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 80%, transparent 100%' }} />
          <p style={{ fontSize: '2vw' }}>{parse(lang.paragraph1)}</p>
        </Box>
        {SlideR(lang.paragraph2, kito2KidsImg)}
        {SlideR(lang.paragraph3, kito3WorkerImg)}
        <Box sx={{ marginBottom: '5vw' }}>
          <img src={kito4CarGif} alt="journey image" style={{ width: '100%' }}/>
        </Box>
        {SlideL(lang.paragraph4, kito5SeaImg)}
        {SlideR(lang.paragraph5, kito6GangRaftImg)}
        {SlideR(lang.paragraph6, kito7CampImg)}
        {SlideL(lang.paragraph7, kito8BackImg)}
      </Box>
      {[[lang.paragraph8, lang.paragraph9], [lang.paragraph11, lang.paragraph12], [lang.paragraph13, lang.paragraph14]].map((paragraph, idx) => (
        <Box key={idx} sx={{ width: '100%', height: '50vw', padding: '0 2rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'hsla(357.29, 92.248%, 45.935%)' }}>
          <p
            style={{
              width: '80%',
              margin: 0,
              fontSize: '10vw',
              fontWeight: 700,
              textAlign: 'start'
            }}
          >{parse(paragraph[0])}</p>
          <p
            style={{
              width: '80%',
              margin: 0,
              fontSize: '2vw',
              fontWeight: 600,
              textAlign: 'end'
            }}
          >{parse(paragraph[1])}</p>
          <p
            style={{
              width: '80%',
              margin: 0,
              fontSize: '1vw',
              textAlign: 'end'
            }}
          >{parse(lang.paragraph10)}</p>
        </Box>
      ))}
      <Box sx={{ width: '100%', height: '50vw', padding: '0 2rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'hsla(357.29, 92.248%, 45.935%)' }}>
        <p style={{ width: '35%', margin: 0, fontSize: '2vw', fontWeight: 700, textAlign: 'center' }}>{parse(lang.paragraph15)}</p>
      </Box>
      <Box sx={{ width: '100%', height: '50vw', padding: '0 2rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'hsla(357.29, 92.248%, 45.935%)' }}>
        <p style={{ margin: 0, fontSize: '15vw', fontWeight: 700 }}>I&#39;m KITO</p>
        <p style={{ margin: 0, fontSize: '5vw' }}>{parse(lang.paragraph16)}</p>
      </Box>
    </>
  )
}

export default Kito
