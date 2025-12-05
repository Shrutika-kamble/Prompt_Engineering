import React from 'react';

export default function Contact() {
  return (
    <section style={{ padding: '3rem' }}>
      <h1>Contact Us</h1>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        gap: '1rem'
      }}>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message" />
        <button>Submit</button>
      </form>
    </section>
  );
}
