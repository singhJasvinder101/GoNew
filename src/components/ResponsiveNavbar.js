import * as React from 'react';
import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { BsMoonStarsFill } from 'react-icons/bs';
import { LuSunMoon } from 'react-icons/lu';
import { SiApplenews } from 'react-icons/si';
import { BiLogIn } from 'react-icons/bi';
import { Alert } from '@mui/material';

import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const pages = ['Business', 'Technology', 'Entertainment', 'health', 'sports'];
const pages = [
  { name: 'Home', link: '/' },
  { name: 'Business', link: '/business' },
  { name: 'Technology', link: '/technology' },
  { name: 'Entertainment', link: '/entertainment' },
  { name: 'Health', link: '/health' },
  { name: 'Sports', link: '/sports' }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate()

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <SiApplenews className='brandIcon' style={{ 'fontSize': '1.6rem', 'marginRight': '0.9rem' }} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h4"
              noWrap
              component={Link}
              to="/"
              cursor='pointer'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none',
                  color: 'inherit',
                },
              }}
            >
              GoNew|
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Button component={Link} to={page.link} >
                      {page.name} 
                    </Button>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button component={Link} to="/login">
                    Login <BiLogIn style={{ 'fontSize': '1.6rem'}}/>
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
            <SiApplenews className='brandIcon-2' style={{ 'fontSize': '1.4rem', 'marginRight': '0.9rem' }} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none',
                  color: 'inherit',
                },
              }}
            >
              GoNew
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <NavLink
                  key={page.name}
                  to={page.link}
                  // onClick={handleCloseNavMenu}
                  // onClick={()=>navigate(page.link)}
                  sx={{ my: 2, color: 'white', dispay: 'block' }}
                  style={{ textDecoration: 'none', color: 'white', margin: '0.5rem 1rem' }}
                >
                  <Typography variant="button">{page.name}</Typography>
                </NavLink>
              ))}
            </Box>
            {
              props.darkIcon ? (<BsMoonStarsFill id={"Dark"} style={props.darkLightStyle} onClick={props.toggleMode} />) :
                (<LuSunMoon id={"Light"} style={{ ...props.darkLightStyle, 'fontSize': '1.8rem' }} onClick={props.toggleMode} />)
            }
            <Button className='login-removed' color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
