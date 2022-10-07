import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Header from '../src/components/Header/Header'
import ListPage from '../src/components/List/ListPage'

const Home: NextPage = () => {
  const professors: Professor[] = [
    {
      id: 1,
      nome: "Marcela Machado",
      foto: "https://github.com/marcelamchdo.png",
      descricao: "Professora de Programação",
      valor_hora: 100
    },
  
    {
      id: 2,
      nome: "Daniel Rubens",
      foto: "https://github.com/danielrubens.png",
      descricao: "Professora de Programação",
      valor_hora: 100
    },

    {
      id: 3,
      nome: "Raynara Santiago",
      foto: "https://github.com/raynarastg.png",
      descricao: "Professora de Programação",
      valor_hora: 100
    },

    {
      id: 4,
      nome: "Laura Lana",
      foto: "https://github.com/lauralana.png",
      descricao: "Professora de Programação",
      valor_hora: 100
    }
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <ListPage professors={professors} />

    </Box>

  )
}

export default Home
