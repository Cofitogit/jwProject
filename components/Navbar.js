import Link from 'next/link';
import React from 'react';
export default function Navbar() {
  return (
    <nav className='navbar bg-body-tertiary bg-primary' data-bs-theme="dark">
      <div className='container-fluid'>
        <Link className='navbar-brand fw-bolder mx-auto' href='#'>
          EDI APP
        </Link>
      </div>
    </nav>
  );
}
