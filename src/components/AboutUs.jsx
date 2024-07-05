import parse from 'html-react-parser'

import { motion } from 'framer-motion'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { Box, Grid, IconButton, List, ListItem } from '@mui/material'

const it = {
  paragraph1: 'Sul Progetto',
  paragraph2: 'La Nostra Missione',
  paragraph3: 'Raccontiamo storie di persone che hanno  affrontato viaggi difficili per costruirsi una  nuova vita in Europa. Condividendo  queste esperienze, l’obiettivo è  aumentare la consapevolezza sulle  difficoltà incontrate durante il percorso  migratorio e nell\'adattarsi a una nuova  realtà nel paese di destinazione.',
  paragraph4: 'Perché "<span>I\'m</span> migration"?',
  paragraph5: '"<span>I\'m</span> migration" racchiude il messaggio  principale: ogni viaggio di un immigrato è  profondamente personale e unico. Cinque  storie distinte di persone che hanno  lasciato le loro terre a causa di guerre,  difficoltà economiche, problemi sociali e  altre ragioni. Nonostante le loro diverse  origini, condividono tutti un obiettivo  comune: <span>un futuro migliore</span>.',
  paragraph6: 'La Nostra Squadra',
  paragraph7: 'Tutti i contenuti presenti su questo sito, inclusi testi, immagini, grafica, loghi, icone e software, sono di proprietà esclusiva di I\'m-migration. Le immagini presenti su questo sito sono state generate dall\'intelligenza artificiale, eccetto una che non è protetta da copyright, e i testi sono stati scritti da noi. Questo lavoro è concesso in licenza con una Licenza Creative Commons Attribuzione 4.0 Internazionale (CC BY 4.0). Tu sei libero di: condividere, copiare e ridistribuire il materiale in qualsiasi formato o supporto; modificare, trasformare il materiale e basarti su di esso per qualsiasi scopo, anche commerciale. Alle seguenti condizioni: attribuzione - devi attribuire un riconoscimento adeguato, fornire un link alla licenza e indicare se sono state apportate delle modifiche. Puoi farlo in qualsiasi modo ragionevole, ma non in alcun modo che suggerisca che il licenziante approvi te o il tuo utilizzo. Non ci sono ulteriori restrizioni: non puoi applicare termini legali o misure tecnologiche che limitino legalmente altri dall\'usare il materiale alle condizioni concesse dalla licenza.',
  paragraph8: '© 2024 I\'m-migration. Tutti diritti riservati.'
}

const en = {
  paragraph1: 'About Project',
  paragraph2: 'Our Mission',
  paragraph3: 'We tell stories of people who have faced difficult journeys to build a new life in Europe. By sharing these experiences, the goal is to raise awareness about the difficulties encountered during the migration process and in adapting to a new reality in the destination country.',
  paragraph4: 'Why "<span>I\'m</span> migration"?',
  paragraph5: '"<span>I\'m</span> migration" encapsulates the main message: every immigrant\'s journey is deeply personal and unique. Five distinct stories of people who have left their lands due to wars, economic difficulties, social problems, and other reasons. Despite their different origins, they all share a common goal: <span>a better future</span>.',
  paragraph6: 'Our Team',
  paragraph7: 'All content on this site, including text, images, graphics, logos, icons, and software, is the exclusive property of I\'m-migration. The images on this site have been generated by artificial intelligence, except one that is not protected by copyright, and the texts have been written by us. This work is licensed under a Creative Commons Attribution 4.0 International License (CC BY 4.0). You are free to: share, copy, and redistribute the material in any format or medium; modify, transform the material and build upon it for any purpose, even commercially. Under the following terms: attribution - you must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use. There are no additional restrictions: you may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.',
  paragraph8: '© 2024 I\'m-migration. All rights reserved.'
}

const Team = (name, surname, url, dev) => {
  return (
    <ListItem
      style={{ justifyContent: !dev && 'end' }}
      component={motion.div}
      initial={{ translateX: dev ? -200 : 200, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1, transition: { duration: 1 } }}
    >
      {dev && <IconButton onClick={() => window.open(url, '_blank')}><BiLogoInstagramAlt style={{ fontSize: '3vw', color: 'var(--dark)' }}/></IconButton>}
      <p style={{ margin: 0, fontSize: '3vw', fontWeight: 600, color: 'var(--dark)' }}>{name}&nbsp;</p>
      <p style={{ margin: 0, fontSize: '3vw', color: 'var(--dark)' }}>{surname}</p>
      {!dev && <IconButton onClick={() => window.open(url, '_blank')}><BiLogoInstagramAlt style={{ fontSize: '3vw', color: 'var(--dark)' }}/></IconButton>}
    </ListItem>
  )
}

const AboutUs = ({ selectedLang }) => {
  const lang = selectedLang ? en : it
  return (
    <>
      <Box sx={{ width: '75%', height: '100vh', paddingX: '5vw', paddingY: 10, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <motion.p
          style={{ margin: 0, color: 'var(--red)', fontSize: '5vw', fontWeight: 700 }}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{translateY: 0, opacity: 1, transition: { duration: .5 } }}
        >{parse(lang.paragraph1)}</motion.p>
        <motion.p
          style={{ marginBottom: 0, fontSize: '3vw', fontWeight: 600 }}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{translateY: 0, opacity: 1, transition: { duration: .5, delay: .5 } }}
        >{parse(lang.paragraph2)}</motion.p>
        <motion.p
          style={{ margin: 0, fontSize: '2vw' }}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{translateY: 0, opacity: 1, transition: { duration: .5, delay: .5 } }}
        >{parse(lang.paragraph3)}</motion.p>
        <motion.p
          style={{ marginBottom: 0, fontSize: '3vw', fontWeight: 600 }}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{translateY: 0, opacity: 1, transition: { duration: .5, delay: 1 } }}
        >{parse(lang.paragraph4)}</motion.p>
        <motion.p
          style={{ margin: 0, fontSize: '2vw' }}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{translateY: 0, opacity: 1, transition: { duration: .5, delay: 1 } }}
        >{parse(lang.paragraph5)}</motion.p>
      </Box>
      <Box sx={{ width: '100%', paddingX: '5vw', paddingY: 10, boxSizing: 'border-box', background: 'var(--red)' }}>
        <motion.p
          style={{ marginTop: 0, textAlign: 'center', color: 'var(--dark)', fontSize: '5vw', fontWeight: 700 }}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1, transition: { duration: .5 } }}
        >{lang.paragraph6}</motion.p>
        <Grid>
          <List>
            {Team('Arun ', 'Mathiyalakan', 'https://www.instagram.com/arun99.dev/', true)}
            {Team('Aurora', 'Parodi', 'https://www.instagram.com/aurora_rowe__/', true)}
            {Team('Samuel', 'Cavicchia', 'https://www.instagram.com/samu1538/', true)}
            {Team('Yuri', 'Romano', 'https://www.instagram.com/yuri.rmn/', true)}
            {Team('Filippo', 'Calderoni', 'https://www.instagram.com/filippo.calderoni/')}
            {Team('Marta', 'Mazzarello', 'https://www.instagram.com/martamazzarello/')}
            {Team('Riccardo', 'Gorza', 'https://www.instagram.com/richigorza/')}
          </List>
        </Grid>
      </Box>
      <Box sx={{ width: '100%', paddingX: '5vw', paddingY: 5, boxSizing: 'border-box' }}>
        <p style={{ margin: 0, fontSize: '1vw' }}>{parse(lang.paragraph7)}</p>
        <p style={{ margin: 0, marginTop: 20, fontSize: '1vw', fontWeight: 600 }}>{parse(lang.paragraph8)}</p>
      </Box>
    </>
  )
}

export default AboutUs
