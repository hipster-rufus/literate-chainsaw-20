import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import '../styles/Header.css';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="header">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}
