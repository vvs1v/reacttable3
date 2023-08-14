
import logosvg1 from "../images/KPMG-Genie-LogoSubtitle-Blue.svg"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Header () {

    return <>
     {/* <img src={logosvg1} alt="logo-svg" style={{width:'800px',marginLeft:'40px',marginBottom:'20px'}} /> */}
     <AppBar position="static">
      <Container maxWidth="xl" style={{backgroundColor:'white',borderBottom:'2px solid #00338D',marginBottom:'2px'}}>
        <Toolbar disableGutters style={{width:'90%',marginLeft:'2%',marginRight:'2%'}}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <img style={{ flexGrow: '1',maxWidth:'300px',margin:'10px 0px 10px 0px' }} src={logosvg1} alt="logo" href="/" />
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            <img style={{ width:'100px' }} src={logosvg1} alt="logo" href="/" />
          </Typography>
          </Toolbar>
      </Container>
    </AppBar>
   
    
    </>
}

export default Header; 