import React from 'react';
import Box from '@mui/material/Box';
import { useTheme, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import logo from 'images/logo.png';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                width={90}
                marginRight={25}
                marginTop={2}
                marginBottom={1}
              >
                <Box
                  component="img"
                  height={'5vh'}
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
              <IconButton
                aria-label="more"
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon fontSize="large" sx={{ color: '#43D8C9 ' }} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose} component="a" href="/">
              Home
            </MenuItem>
            <MenuItem onClick={handleClose} component="a" href="/profile">
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose} component="a" href="/portfolio">
              Portfolio
            </MenuItem>
            <MenuItem onClick={handleClose} component="a" href="/blog">
              Blog
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
