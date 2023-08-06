import React from 'react';
import '../../styles/Card.css';
import kali from '../../assets/kali-lott.jpeg'

export default function About({ handlePageChange }) {
  return (
    <div className='card'>
      <h1 className='text-center'>About Me</h1>
      <hr />
      <div className="container justify-content-center">
        <div className="about-content row row-cols-lg-2">
          <div className='col'>
            <img className="profile-pic" src={kali} alt="kali-lott"></img>
          </div>
          <div className='col'>
            <p>Hello! My name is Kali Lott, and I am a graphic designer from Denver, CO, who is interested
              in entering the world of programming. <br />
              I gravitate towards front-end development as a designer, UI design especially, but I have proficiency in both front-end and back-end technologies. 
                <a 
                  className="resume-link" 
                  href='#resume' 
                  onClick={() => handlePageChange('Resume')}
                >View my resume</a> 
              to see my full list of skills. <br />
              Being born and raised in Colorado, I enjoy hiking, camping, and water sports! I'm also an avid cinemaphile and boardgame enthusiast. Animals are the best, and I hope one day to have a job flexible enough to take care of a cat or dog -- or both! 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
