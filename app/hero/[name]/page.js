'use client'

import heroes from '@/src/data/heroes.json';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Box, Chip, styled, Typography } from '@mui/material';
import theme from '@/src/theme';
import { grey } from '@mui/material/colors';
import { formatArrayWithCommas } from '@/utils/format';

const TwoColumnContainer = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
}))

const BasicInfoContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    border: `1px solid ${grey[300]}`,
    padding: theme.spacing(2),
    display: 'flex',
    gap: 10
}))

const HeroThumb = styled('img')(({ theme }) => ({
    width: 120,
    height: 200,
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
    objectPosition: '50% 20%',
    imageRendering: 'auto',
}))

const FieldLayout = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
}))

const Label = styled(Box)(({ theme }) => ({
    fontSize: 12,
    fontWeight: 500,
    color: grey[700],
}))

const Field = styled(Box)(({ theme }) => ({
    fontSize: 16,
    fontWeight: 300,
    color: grey[800],
    lineHeight: '18px'
}))

export default function Page(){
    const { name } = useParams()

    const [selectedSkill, setselectedSkill] = useState(0)

    const hero = heroes.find((item) => 
        item?.name?.toLowerCase() === name
    );

    if (!hero) return <div>Hero not found</div>;
    
    return (
        <TwoColumnContainer>
            <BasicInfoContainer>
                <HeroThumb src={`/images/hero/${hero.image}`} />
                <Box sx={{px: 1}}>
                    <FieldLayout>
                        <Label>NAME</Label>
                        <Field>{hero.name}</Field>
                    </FieldLayout>

                    <FieldLayout sx={{marginTop: 2}}>
                        <Label>QUOTE</Label>
                        <Field>{hero.quote}</Field>
                    </FieldLayout>

                    <FieldLayout sx={{marginTop: 2}}>
                        <Label>ROLES</Label>
                        <Field>
                            {formatArrayWithCommas(hero.roles)}
                        </Field>
                    </FieldLayout>

                    <FieldLayout sx={{marginTop: 2}}>
                        <Label>LANES</Label>
                        <Field>
                            {formatArrayWithCommas(hero.lanes)}
                        </Field>
                    </FieldLayout>
                </Box>
            </BasicInfoContainer>
        </TwoColumnContainer>
    )
}