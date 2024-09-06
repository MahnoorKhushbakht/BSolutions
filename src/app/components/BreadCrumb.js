'use client'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { usePathname} from 'next/navigation'
function Breadcrumbs() {
  const pathname = usePathname()
  return (
    <Breadcrumb data-aos='fade-up' className='text-center'>
      <Breadcrumb.Item className="text-white md:text-lg text-base" href="/">
        Home
      </Breadcrumb.Item>
      {pathname === '/about' ? (
        <Breadcrumb.Item className="text-white md:text-lg text-base" href="/about">
          About
        </Breadcrumb.Item>
      ) : pathname === '/services' ? (
        <Breadcrumb.Item className="text-white md:text-lg text-base" href="/services">
          Services
        </Breadcrumb.Item>
      ) : (
        <Breadcrumb.Item className="text-white md:text-lg text-base" href="/contact">
          Contact
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
