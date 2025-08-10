import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import MuiTypography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import { usePathname, useRouter } from 'next/navigation';
import { RiSwordFill } from "react-icons/ri";
import { grey } from '@mui/material/colors';
import { DrawerContext } from '@/src/context/DrawerContext';


const drawerWidth = 240;

// When Drawer Open
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

// When Drawer Close
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// Collapsing Icon
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

// Appbar
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  position: 'fixed',
  backgroundColor: 'white',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        borderLeft: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

// Drawer
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

// Button Item Menu
const ListItemButton = styled(MuiListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isSelected', // prevent custom prop from leaking to DOM
})(({ isSelected }) => ({
  minHeight: 48,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 8,
  border: isSelected ? '1px solid rgba(106, 125, 231, 0.2)' : '1px solid transparent',
  backgroundColor: isSelected ? 'rgba(106, 125, 231, 0.1)' : 'transparent',
  '&:hover': {
    backgroundColor: isSelected ? 'rgba(106, 125, 231, 0.2)' : 'transparent',
  },
  '& .MuiTouchRipple-root .MuiTouchRipple-rippleVisible': {
    color: 'rgba(63, 81, 181, 0.6)',
  },
}));

// Icon Item Menu
const ListItemIcon = styled(MuiListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})(({isSelected}) => ({
  minWidth: 0,
  justifyContent: 'center',
  color: isSelected ? '#3f51b5' : '#757575'
}))

// Text Item Menu
const Typography = styled(MuiTypography, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})(({ isSelected }) => ({
  color: isSelected ? '#3f51b5' : '#757575',
  fontWeight: isSelected ? '600' : '400'
}))

export default function MiniDrawer({children}) {
  const theme = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const [appBar, setAppBar] = useState('')
  const [routes, setRoutes] = useState({
    isHome: true,
    isHero: false,
  })

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Route Handle
  useEffect(() => {

    setRoutes({
      isHome: pathname === '/',
      isHero: pathname === '/hero',
      isProfile: pathname === '/profile',
    });

    switch (pathname) {
      case '/': 
        setAppBar('Home')
        break;
  
      case '/hero':
        setAppBar('Hero')
        break;
    
      default:
        setAppBar('Home')
        break;
    }
  }, [pathname]);

  return (
    <DrawerContext.Provider value={{ open }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar 
          position="fixed"
          open={open} 
          color='white' 
          elevation={0}
          sx={{borderBottom: `1px solid ${grey[300]}`}}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  marginRight: 5,
                },
                open && { display: 'none' },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <MuiTypography variant="h6" noWrap component="div">
              {appBar}
            </MuiTypography>
          </Toolbar>
        </AppBar>

        <Drawer 
          variant="permanent" 
          open={open}
          sx={{
            '& .MuiDrawer-paper': {borderRight: `1px solid ${grey[300]}`}
          }}>
          <DrawerHeader>
            <MuiTypography
              color="textPrimary"
              marginLeft={2}
              sx={{fontWeight: 600, fontSize: '15px', marginTop: '1px'}}
            >
                ML MASTERY ADMIN
            </MuiTypography>
            <IconButton onClick={handleDrawerClose} sx={[ !open && {display: 'none'} ]}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>

          <List>
            <ListItem sx={{display: 'block', pl: 1.5 }}>
              <ListItemButton
                onClick={() => router.push('/')}
                sx={[ open ? { justifyContent: 'initial'} : { justifyContent: 'center'} ]}
                isSelected={routes.isHome}
              >
                <ListItemIcon
                  isSelected={routes.isHome}
                  sx={[
                    open ? { mr: 2 } : { mr: 'auto'},
                  ]}
                  >
                  <HomeIcon />
                </ListItemIcon>

                <ListItemText
                  primary={
                    <Typography isSelected={routes.isHome}>
                      Home
                    </Typography>
                  }
                  sx={{ opacity: open ? 1 : 0, }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem sx={{display: 'block', pl: 1.5 }}>
              <ListItemButton
                onClick={() => router.push('/hero')}
                sx={[ open ? { justifyContent: 'initial'} : { justifyContent: 'center'} ]}
                isSelected={routes.isHero}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open ? { mr: 2 } : { mr: 'auto'},
                    routes.isHero ? {color: '#3f51b5'} : ''
                  ]}
                  >
                  <RiSwordFill size={24}/>
                </ListItemIcon>

                <ListItemText
                  primary={
                    <Typography isSelected={routes.isHero}>
                      Hero
                    </Typography>
                  }
                  sx={{ opacity: open ? 1 : 0, }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
              flexGrow: 1,
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
        >
          <DrawerHeader />

          <Box
            sx={{
              flexGrow: 1,
              padding: 3,
              bgcolor: '#f0f1f7',
              overflowY: 'auto'
            }}
          >
            {children}
          </Box>
        </Box>


      </Box>
    </DrawerContext.Provider>
  );
}
