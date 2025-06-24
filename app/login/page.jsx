'use client'

import { Box, Grid, Paper, TextField, Button, Typography, InputAdornment, IconButton } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setloading] = useState(false)
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        setloading(true)
        setTimeout(() => {
            setloading(false)
            router.push('/')
        }, 1000);
    };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper
        elevation={2}
        variant="outlined"
        sx={{
          padding: "36px",
          width: 400,
          boxShadow: 1,
          borderRadius: 2,
        }}
      >
        <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}>
                <Grid marginBottom={2}>
                    <Typography variant="h6" textAlign="center" color="text.muted">
                        Welcome to
                    </Typography>
                    <Typography variant="h5" textAlign="center" color="text" fontWeight="bold">
                        ML Mastery Admin
                    </Typography>
                </Grid>

                <Grid>
                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        size="small"
                        autoFocus
                        disabled={loading}
                        tabIndex={1}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonOutlineOutlinedIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Grid>

                <Grid>
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        size="small"
                        type={showPassword ? 'text' : 'password'}
                        tabIndex={2}
                        disabled={loading}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            tabIndex={3}
                                        >
                                            {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Grid>

                <Grid marginTop={2}>
                    <Button
                        variant="contained"
                        fullWidth
                        tabIndex={4}
                        loading={loading}
                        onClick={handleSubmit}
                        type="submit"
                    >
                        Sign In
                    </Button>
                </Grid>
            </Grid>
        </form>
      </Paper>
    </Box>
  );
}
