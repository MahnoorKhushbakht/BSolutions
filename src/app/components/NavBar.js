'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';

const pages = [
  { page: 'Home', pageLink: '/' },
  { page: 'About', pageLink: '/about' },
  { page: 'Contact', pageLink: '/contact' },
  { page: 'Services', pageLink: '/services' }
];

function ResponsiveAppBar() {
  return (
    <AppBar  position='fixed' className='bg-white text-black '>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <Link href="/" passHref>
            <h1 className='font-extrabold bg-clip-text text-transparent  bg-gradient-to-r from-blue-400 to-gray-800 text-3xl'>BE Solutions.</h1>
            </Link>
          </Box>

       
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
           
                        <Link href="/" passHref>
                        <h1 className='font-extrabold bg-clip-text text-transparent mt-2 mb-2 bg-gradient-to-r from-blue-400 to-gray-800 text-2xl'>BE Solutions.</h1>
            </Link>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' ,justifyContent:'center',alignItems:'center'} }}>
            {pages.map((item, index) => (
              <Link key={index} href={item.pageLink} passHref>
                <Button className='text-lg mx-4 md:mx-6 hvr-underline-from-left cursor-pointer'
                  sx={{ my: 2, color: 'black', display: 'block' ,fontWeight: 'medium'}}
                >
                  {item.page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex'} }}>
              <div className="border-4 border-transparent text-lg transition transform hover:-translate-y-1 bg-blue-950 p-2 text-white">
                34897329847
              </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
