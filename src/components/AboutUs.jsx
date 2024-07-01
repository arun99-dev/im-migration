import parse from 'html-react-parser'

import { BiLogoInstagramAlt } from 'react-icons/bi'
import { Box, Grid, IconButton, List, ListItem } from '@mui/material'

const it = {
  paragraph1: 'Sul Progetto',
  paragraph2: 'La Nostra Missione',
  paragraph3: 'Raccontiamo storie di persone che hanno  affrontato viaggi difficili per costruirsi una  nuova vita in Europa. Condividendo  queste esperienze, l’obiettivo è  aumentare la consapevolezza sulle  difficoltà incontrate durante il percorso  migratorio e nell\'adattarsi a una nuova  realtà nel paese di destinazione.',
  paragraph4: 'Perché "<span>I\'m</span> Migration"?',
  paragraph5: '"<span>I\'m</span> Migration" racchiude il messaggio  principale: ogni viaggio di un immigrato è  profondamente personale e unico. Cinque  storie distinte di persone che hanno  lasciato le loro terre a causa di guerre,  difficoltà economiche, problemi sociali e  altre ragioni. Nonostante le loro diverse  origini, condividono tutti un obiettivo  comune: <span>un futuro migliore</span>.',
  paragraph6: 'Nostra Squadra'
}

const en = {
  paragraph1: 'About Project',
  paragraph2: 'Our Mission',
  paragraph3: 'We tell stories of people who have faced difficult journeys to build a new life in Europe. By sharing these experiences, the goal is to raise awareness about the difficulties encountered during the migration process and in adapting to a new reality in the destination country.',
  paragraph4: 'Why "<span>I\'m</span> Migration"?',
  paragraph5: '"<span>I\'m</span> Migration" encapsulates the main message: every immigrant\'s journey is deeply personal and unique. Five distinct stories of people who have left their lands due to wars, economic difficulties, social problems, and other reasons. Despite their different origins, they all share a common goal: <span>a better future</span>.',
  paragraph6: 'Our Team'
}

const Team = (name, surname, url, dev) => {
  return (
    <ListItem style={{ justifyContent: !dev && 'end' }}>
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
      <Box sx={{ width: '100%', paddingX: '5vw', paddingY: 15, boxSizing: 'border-box' }}>
        <p style={{ margin: 0, color: 'var(--red)', fontSize: '5vw', fontWeight: 700 }}>{parse(lang.paragraph1)}</p>
        <p style={{ marginBottom: 0, fontSize: '3vw', fontWeight: 600 }}>{parse(lang.paragraph2)}</p>
        <p style={{ margin: 0, fontSize: '2vw' }}>{parse(lang.paragraph3)}</p>
        <p style={{ marginBottom: 0, fontSize: '3vw', fontWeight: 600 }}>{parse(lang.paragraph4)}</p>
        <p style={{ margin: 0, fontSize: '2vw' }}>{parse(lang.paragraph5)}</p>
      </Box>
      <Box sx={{ width: '100%', paddingX: '5vw', paddingY: 10, boxSizing: 'border-box', background: 'var(--red)' }}>
        <p style={{ marginTop: 0, textAlign: 'center', color: 'var(--dark)', fontSize: '5vw', fontWeight: 700 }}>{lang.paragraph6}</p>
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
    </>
  )
}

export default AboutUs
