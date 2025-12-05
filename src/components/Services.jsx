import React from 'react';

export default function Services() {
  return (
    <section style={{ padding: '3rem' }}>
      <h1 style={{ textAlign: 'center' }}>Our Services</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        <div><h1>🚀 Fast Development</h1></div>
        <div><h1>🎨 Beautiful UI</h1></div>
        <div><h1>📱 Responsive</h1></div>
      </div>
    </section>
  );
}
