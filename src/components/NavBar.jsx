import React from 'react';

export default function NavBar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem',
      background: '#222',
      color: '#2ebeb7ff'
    }}>
      <h2>Brand</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="#" style={{ color: '#ce4f06ff' }}>Home</a>
        <a href="#" style={{ color: '#ce4f06ff' }}>Services</a>
        <a href="#" style={{ color: '#ce4f06ff' }}>Contact</a>
      </div>
    </nav>
  );
}
