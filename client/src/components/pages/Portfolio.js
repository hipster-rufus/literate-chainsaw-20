import React from 'react';
import '../../styles/Card.css';

export default function Blog() {
  return (
    <div className='card text-center'>
      <h1>Portfolio</h1>
      <hr />
      <section className='row justify-content-center'>
        <div className='project-1 col-xl-4 g-3 row-item'>
          <a href="https://hipster-rufus.github.io/animated-bassoon-3/">Random Password Generator</a>
          <br />
          <a href="https://www.github.com/hipster-rufus/animated-bassoon-3/">GitHub Repository</a>
        </div>
        <div className='project-2 col-xl-4 g-3 row-item'>
          <a href="https://epipkl.github.io/Groupie/">Groupie</a>
          <br />
          <a href="https://github.com/EpipKL/Groupie">GitHub Repository</a>
        </div>
        <div className='project-3 col-xl-4 g-3 row-item'>
          <a href="https://project-2-team-5.herokuapp.com/">We Can't Wait for the SQL</a>
          <br />
          <a href="https://github.com/mlgibson8/Project_2_Group_5">GitHub Repository</a>
        </div>
        <div className='project-4 col-xl-4 g-3 row-item'>     
          <a href="https://hipster-rufus.github.io/animated-bassoon-3/">Random Password Generator</a>
          <br />
          <a href="https://www.github.com/hipster-rufus/animated-bassoon-3/">GitHub Repository</a>
        </div>
        <div className='project-5 col-xl-4 g-3 row-item'> 
          <a href="https://epipkl.github.io/Groupie/">Groupie</a>
          <br />
          <a href="https://github.com/EpipKL/Groupie">GitHub Repository</a>
        </div>
        <div className='project-6 col-xl-4 g-3 row-item'>
          <a href="https://project-2-team-5.herokuapp.com/">We Can't Wait for the SQL</a>
          <br />
          <a href="ttps://github.com/mlgibson8/Project_2_Group_5">GitHub Repository</a>
        </div>
      </section>
    </div>
  );
}
