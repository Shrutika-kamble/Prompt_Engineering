import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
