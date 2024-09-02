'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import '@/app/css/Navbar.css';
import Image from 'next/image';

function Header() {
  return (
    <Navbar expand="md" fixed="top" className="header drop-shadow-2xl h-20 md:h-24 bg-white">
      <Container className="flex items-center justify-between">
        {/* Logo Section */}
        <Navbar.Brand className="flex items-center">
          <Link href="/" prefetch={false}>
            <Image
              src="/images/be-logo.png"
              alt="brand"
              width={150}  // Responsive width for smaller screens
              height={60}  // Responsive height for smaller screens
              className="d-inline-block align-top object-contain"
              priority  // Ensures the logo loads quickly
            />
          </Link>
        </Navbar.Brand>



        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-grow justify-center md:flex hidden">
            <Navbar.Text>
              <Link
                href="/"
                prefetch={false}
                className="text-lg mx-4 md:mx-6 hvr-underline-from-left cursor-pointer"
              >
                Home
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link
                href="/about"
                prefetch={false}
                className="text-lg mx-4 md:mx-6 hvr-underline-from-left cursor-pointer"
              >
                About
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link
                href="/contact"
                prefetch={false}
                className="text-lg mx-4 md:mx-6 hvr-underline-from-left cursor-pointer"
              >
                Contact
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link
                href="/services"
                prefetch={false}
                className="text-lg mx-4 md:mx-6 hvr-underline-from-left cursor-pointer"
              >
                Services
              </Link>
            </Navbar.Text>
          </Nav>

          {/* Contact Section - Hidden on Small Screens */}
          <Nav className="hidden md:flex">
            <Navbar.Text className="flex items-center">
              <div className="border-4 border-transparent text-lg transition transform hover:-translate-y-1 bg-blue-950 p-3 text-white">
                34897329847
              </div>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
