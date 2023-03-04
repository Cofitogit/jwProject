import Link from 'next/link';
import React from 'react';
export default function Navbar() {
  return (
    <nav className='navbar bg-body-tertiary bg-dark bg-gradient' data-bs-theme="dark">
      <div className='container-fluid'>
        <Link className='navbar-brand fw-bolder text-secondary mx-auto' href='#'>
          EDI APP
        </Link>
      </div>
    </nav>
  );
}
