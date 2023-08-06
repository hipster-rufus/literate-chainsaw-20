import React from 'react';
import '../../styles/Card.css';
import '../../styles/Resume.css';

export default function Resume() {
  return (
    <div className='card text-center'>
      <h1>Resume</h1>
      <hr />

      <div className='text-start text-white m-50'>
        <a className="resume-link" href='../../assets/kali-lott-resume.pdf' download>Download resume</a>
        <h3>Front-End Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-End Skills</h3>
        <ul>
          <li>APIs</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>MySQL & Sequelize</li>
          <li>MongoDB & Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}
