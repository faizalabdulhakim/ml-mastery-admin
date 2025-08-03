'use client'

import heroes from '@/src/data/heroes.json';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Box, styled } from '@mui/material';

const HeroThumb = styled('img')(({ theme }) => ({
    width: 300,
    height: 400,
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
    objectPosition: '50% 20%',
    border: `1px solid ${theme.palette.primary[100]}`,
    imageRendering: 'auto'
  }))

export default function Page(){
    const { name } = useParams()

    const [selectedSkill, setselectedSkill] = useState(0)

    const hero = heroes.find((item) => 
        item?.name?.toLowerCase() === name
    );

    if (!hero) return <di>Hero not found</di>;
    
    return (
        <Box>
            <HeroThumb src={`/images/hero/${hero.image}`} />
            <Box>{hero.name}</Box>
        </Box>
    )
}