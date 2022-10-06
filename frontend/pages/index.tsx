import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Header from '../src/components/Header/Header'
import ListPage from '../src/components/List/ListPage'

const Home: NextPage = () => {
  const professors: Professor[] = [
    {
      id: 1,
      nome: "professor 1",
      foto: "https://github.com/marcelamchdo.png",
      descricao: "Descrição do professor 1",
      valor_hora: 100
    },
  
    {
      id: 2,
      nome: "professor 2",
      foto: "https://github.com/marcelamchdo.png",
      descricao: "Descrição do professor 2",
      valor_hora: 200
    },

    {
      id: 3,
      nome: "professor 3",
      foto: "https://github.com/marcelamchdo.png",
      descricao: "Descrição do professor 3",
      valor_hora: 300
    },

    {
      id: 4,
      nome: "professor 4",
      foto: "https://github.com/marcelamchdo.png",
      descricao: "Descrição do professor 4",
      valor_hora: 400
    }
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <ListPage professors={professors} />

    </Box>

  )
}

export default Home
