import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Link from 'next/link';

export default function Page() {
  return (
    <Box sx={{ width: 300  }}>
      <Card variant="outlined">
        <CardContent sx={{paddingBottom: 1}}>
          <Typography variant='h6' fontWeight={500}>
            Total Hero
          </Typography>
          <Typography variant='h6' fontWeight={400}>
            129
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Box sx={{ flexGrow: 1 }} />
          <Button component={Link} href="/hero" size="small">Manage Hero</Button>
        </CardActions>
      </Card>
    </Box>
  )
}