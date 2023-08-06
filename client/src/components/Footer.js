import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto p-4">
      <div className="container text-center text-white mb-5">
        <div className="row g-2">
          <div className="col-md-4">
            <a className="profile-link" href="https://github.com/hipster-rufus">GitHub</a>
          </div>
          <div className="col-md-4">
            <a className="profile-link" href="https://www.linkedin.com/in/kali-lott-5a0b4b166/">LinkedIn</a>
          </div>
          <div className="col-md-4">
            <a className="profile-link" href="/">Stack Overflow</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
