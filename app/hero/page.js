'use client'

import heroes from '@/src/data/heroes.json';
import Header from "@/components/hero/Header"
import { Box } from "@mui/material"
import { grey } from "@mui/material/colors"
import { styled, useTheme } from '@mui/material/styles'
import Link from 'next/link';
import { useDrawer } from '@/src/context/DrawerContext';

const HeroContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12
}))

const HeroItemContainer = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  backgroundColor: theme.palette.primary[50],
  width: open ? 140 : 130,
  height: 40,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius * 1.2,
  border: `1px solid ${theme.palette.primary[100]}`,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}))

const HeroThumb = styled('img')(({ theme }) => ({
  width: 28,
  height: 28,
  border: `1px solid ${theme.palette.primary[400]}`,
  borderRadius: '100%',
  objectFit: 'cover',
}))

export default function Page() {
  const theme = useTheme();
  const { open } = useDrawer()

  return (
    <Box
      sx={{
        minHeight: 850,
        backgroundColor: 'white',
        border: `1px solid ${grey[300]}`,
        padding: 2,
        borderRadius: 1
      }}
    >
      <Header />

      <HeroContainer open={open}>
      {
        heroes.map((hero, index) => (
          <HeroItemContainer
            key={index} 
            href={`/hero/${hero.name.toLowerCase()}`}
            open={open}>
            <HeroThumb src={`images/hero/${hero.icon}`}/>

            <Box component="p"
              sx={{
                fontSize: 15,
                color: theme.palette.primary[800],
                lineHeight: 1
              }}>
              {hero.name}
            </Box>    
          </HeroItemContainer>
        ))
      }

      </HeroContainer>
    </Box>    
  )
  
}