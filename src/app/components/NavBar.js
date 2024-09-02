'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';

const pages = [
  { page: 'Home', pageLink: '/' },
  { page: 'About', pageLink: '/about' },
  { page: 'Contact', pageLink: '/contact' },
  { page: 'Services', pageLink: '/services' }
];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" className='bg-white text-black h-32'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <Link href="/" passHref>
              <Image
                src="/images/be-logo.png"
                alt="brand"
                width={150}  
                height={60}
              />
            </Link>
          </Box>

       
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
           
                        <Link href="/" passHref>
              <Image
                src="/images/be-logo.png"
                alt="brand"
                width={150}  
                height={60}
              />
            </Link>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' ,justifyContent:'center',alignItems:'center'} }}>
            {pages.map((item, index) => (
              <Link key={index} href={item.pageLink} passHref>
                <Button
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {item.page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              <div className="border-4 border-transparent text-lg transition transform hover:-translate-y-1 bg-blue-950 p-3 text-white">
                34897329847
              </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
