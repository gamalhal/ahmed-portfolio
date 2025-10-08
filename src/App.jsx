import React, { useEffect, useRef } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// ...existing code...

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled } from '@mui/material/styles';
import myVideo from './videos/backgroundvideo.mp4';
// ...existing code...

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';

import * as THREE from 'three';


//  TODO is to import matial ui and styles in m code





function App() {
  return (

    



    <div className="App">
      
      <header className="App-header">
       {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ResponsiveAppBar/>

        <VideoBackground />
         </header>

         <div className="body">
    <section className='sec'>  


        <p>As a passionate architect, My work focuses on blending modern design with sustainable practices, crafting environments that harmonize with both their natural and urban surroundings. With a deep appreciation for the balance between form and function

With experience in residential, commercial, heritage, parametric, therapeutic, and sustainable architecture as well as urban planning, and proficiency in tools such as [Rhino & Grasshopper, Revit, SketchUp, Lumion, 3dsMax, UnrealEngine 5, etc], I approach each project with a fresh perspective, ensuring that every detail, from concept to execution, aligns with the client’s vision and the environment's needs.</p>
    
        
   
     <div>




   </div>
    </section>


        
    <GamalHal/>


    <VideoBackground />
    <NestedGrid/ >

         </div>
    </div>
  );

}
export default App;


// ***************************************************************
// nav bar
const pages = ['Projects', 'My CV', 'Connect us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
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

  return (
    <AppBar position="fixed" sx={{ 
      backgroundColor: 'rgba(0, 0, 0, 0.8)', 
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AHMED HAL
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}





// ******************************************************************************

// video

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleLoadedMetadata = () => {
      const videoRatio = video.videoWidth / video.videoHeight;
      const containerRatio = window.innerWidth / window.innerHeight;
      if (videoRatio > containerRatio) {
        video.style.objectFit = 'contain';
      } else {
        video.style.objectFit = 'cover';
      }
    };

    const handleError = () => {
      console.error('Video failed to load');
    };

    const handleCanPlay = () => {
      video.play().catch(error => {
        console.error('Autoplay failed:', error);
      });
    };

    const handleLoadedData = () => {
      // Force play when data is loaded
      video.play().catch(error => {
        console.error('Autoplay failed on loadeddata:', error);
      });
    };

    // Add multiple event listeners to ensure video plays
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    
    // Try to play immediately
    setTimeout(() => {
      if (video.readyState >= 2) { // HAVE_CURRENT_DATA
        video.play().catch(error => {
          console.error('Autoplay failed on timeout:', error);
        });
      }
    }, 100);
    
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <div className="video-container">
      <video 
        ref={videoRef} 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
        style={{ width: '100%', height: '100%' }}
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <ProfilePhoto/>
        WELCOME TO AHMED HAL PORTFOLIO
        <Button id="btn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/ahmed-hal/", "_blank");
          }}
        >
          MY CV
        </Button>
      </div>
    </div>
  );
};



function ProfilePhoto() {
  return (
    <Avatar
      src="/src/images/ahmedhal.jpeg"
      alt="Profile"
      sx={{ width: 50, height: 50 }}
    />
  );
}




const GamalHal = () => {
  return (
    <div id="cat"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/esccolIXnB0" title="Meet Bridge for Unreal Engine 5" frameborder="0" allowfullscreen="">
      </iframe>
      
      
      </div>
  );
};



// *****************************************************************************




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
    </React.Fragment>
  );
}

 function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}



// ...existing code...
