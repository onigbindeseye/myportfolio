import React from 'react';
import Box from '@mui/material/Box';
import { useTheme, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import navConfig from './config';
import logo from 'images/logo.png';

const Header = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const handleDrawerClose = () => {
    setState(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navConfig.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={text.path}>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const ColorButton = styled(Button)(() => ({
    color: '#43D8C9',
    width: 125,
    height: 45,
    fontWeight: 600,
    fontSize: '16px',
    textTransform: 'capitalize',
    borderColor: '#43D8C9',
    '&:hover': {
      color: '#fff',
      borderColor: '#43D8C9',
    },
  }));

  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
      marginBottom={{ xs: 2, sm: 1 }}
      marginTop={{ xs: 2, sm: 1 }}
    >
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}
        marginRight={{ xs: '0%', sm: '15%' }}
        paddingLeft={{ xs: '0%', sm: '2%' }}
        width={230}
      >
        <Box component="a" underline="none" href="/" title="Oluseye Onigbinde">
          <img src={logo} alt="logo" width={'100%'} />
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems={'center'}
        width={{ xs: '100%', sm: '100%' }}
        justifyContent={'space-between'}
      >
        <Box
          sx={{ display: { xs: 'none', md: 'flex' } }}
          alignItems={'center'}
          justifyContent={'space-between'}
          width={'100%'}
          fontWeight={600}
          color={'#43D8C9'}
          paddingLeft={'25%'}
        >
          <Box>
            <Link
              underline="none"
              component="a"
              href="/profile"
              color="#43D8C9"
            >
              Profile
            </Link>
          </Box>
          <Box>
            <Link
              underline="none"
              component="a"
              href="/portfolio"
              color="#43D8C9"
            >
              Portfolio
            </Link>
          </Box>
          <Box>
            <Link underline="none" component="a" href="/blog" color={'#43D8C9'}>
              Blog
            </Link>
          </Box>
          <Box>
            <ColorButton
              component={'a'}
              variant="outlined"
              size="medium"
              href={''}
              target={'_blank'}
            >
              Resume
            </ColorButton>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }} width={'100%'}>
          <div>
            <AppBar
              position="fixed"
              zIndex={theme.zIndex.drawer + 1}
              sx={{
                backgroundColor: '#0D3446',
              }}
            >
              <Toolbar>
                <Box
                  component="a"
                  underline="none"
                  href="/"
                  title="Oluseye Onigbinde"
                  width={'100%'}
                  marginRight={29}
                  marginTop={2}
                  marginBottom={2}
                >
                  <Box
                    component="img"
                    height={'4vh'}
                    sx={{
                      display: 'block',
                      position: 'relative',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={logo}
                    alt={'logo'}
                  />
                </Box>
                {['right'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                      <MenuIcon fontSize="large" sx={{ color: '#43D8C9' }} />
                    </IconButton>
                    <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                          <CloseIcon sx={{ color: '#43D8C9' }} />
                        </IconButton>
                      </DrawerHeader>
                      <Divider />
                      {list(anchor)}
                      <Divider />
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </Toolbar>
            </AppBar>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
