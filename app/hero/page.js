'use client'

import heroes from '@/src/data/heroes.json';
import Header from "@/components/hero/Header"
import { Box } from "@mui/material"
import { grey } from "@mui/material/colors"
import { styled, useTheme } from '@mui/material/styles'
import Link from 'next/link';

const HeroContainer = styled(Box)(({ theme }) => ({
  height: 730,
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridTemplateRows: 'repeat(10, 40px)',
  gap: 12
}))

const HeroItemContainer = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.primary[50],
  width: 130,
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
  height: 24,
  borderRadius: theme.shape.borderRadius,
  objectFit: 'cover',
  objectPosition: '50% 20%',
  border: `1px solid ${theme.palette.primary[100]}`,
  imageRendering: 'auto'
}))

export default function Page() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        border: `1px solid ${grey[400]}`,
        padding: 2,
        borderRadius: 1
      }}
    >
      <Header />
      <HeroContainer>

      {
        heroes.map((hero, index) => (
          <HeroItemContainer
            key={index} 
            href={`/hero/${hero.name.toLowerCase()}`}>
            <HeroThumb src={`images/hero/${hero.image}`}/>

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