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
            <h1 className='font-extrabold bg-clip-text text-transparent  bg-gradient-to-r from-blue-400 to-gray-800 text-3xl'>Market Minds.</h1>
            </Link>
          </Box>

       
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
           
                        <Link href="/" passHref>
                        <h1 className='font-extrabold bg-clip-text text-transparent mt-2 mb-2 bg-gradient-to-r from-blue-400 to-gray-800 text-2xl'>Market Minds.</h1>
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
          <div className="flex items-center w-48 gap-2 border-4 border-transparent text-lg transition transform hover:-translate-y-1 bg-blue-950 p-2 text-white">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
  +34 8973 29847
</div>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
