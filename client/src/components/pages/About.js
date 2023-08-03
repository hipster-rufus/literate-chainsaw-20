import React from 'react';
import '../../styles/Card.css';
import kali from '../../assets/kali-lott.jpeg'

export default function About() {
  return (
    <div className='card'>
      <h1 className='text-center'>About Me</h1>
      <hr />
      <div className="container justify-content-center">
        <div className="about-content">
          <img className="profile-pic" src={kali} alt="kali-lott"></img>
          <p>Hello! My name is Kali Lott, and I am a Denver-born graphic designer who is interested
            in entering the field of programming. 
          </p>
        </div>
      </div>
    </div>
  );
}
