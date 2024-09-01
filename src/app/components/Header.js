'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import '@/app/css/Navbar.css';

function Header() {
  return (
    <Navbar expand="md" fixed="static" className="header drop-shadow-2xl">
      <Container className="md:mt-5 mt-2 md:mb-5 mb-2">
        <div>
          <Navbar.Brand className="text-base md:text-4xl">
            B Solutions
          </Navbar.Brand>
        </div>
        <div>
          <Nav className="w-full">
          <Navbar.Text>
 <Link href='/' prefetch={false}
 className="hidden md:flex text-lg ml-2 md:ml-8 mr-2 md:mr-8 mt-1 md:mt-3 mb-1 md:mb-3 hvr-underline-from-left decoration-4 cursor-pointer">
Home
</Link>
            </Navbar.Text>
            <Navbar.Text>
 <Link href='/about' prefetch={false}
 className="hidden md:flex text-lg ml-2 md:ml-8 mr-2 md:mr-8 mt-1 md:mt-3 mb-1 md:mb-3 hvr-underline-from-left decoration-4 cursor-pointer">
About
</Link>
            </Navbar.Text>
            <Navbar.Text>
 <Link href='/contact' prefetch={false}
 className="hidden md:flex text-lg ml-2 md:ml-8 mr-2 md:mr-8 mt-1 md:mt-3 mb-1 md:mb-3 hvr-underline-from-left decoration-4 cursor-pointer">
Contact
</Link>
            </Navbar.Text>
            <Navbar.Text>
 <Link href='/services' prefetch={false}
 className="hidden md:flex text-lg ml-2 md:ml-8 mr-2 md:mr-8 mt-1 md:mt-3 mb-1 md:mb-3 hvr-underline-from-left decoration-4 cursor-pointer">
Services
</Link>
            </Navbar.Text>
          </Nav>
        </div>
        <div>
          <Nav>
            <Navbar.Text href="#services" className="hidden md:flex ml-auto">
              <div className="border-4 border-transparent text-lg transition transform hover:-translate-y-1 bg-blue-950 p-3 md:p-3 mt-1 md:mt-2 text-white ">
                34897329847
              </div>
            </Navbar.Text>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
