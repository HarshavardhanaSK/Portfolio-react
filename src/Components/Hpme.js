import React from 'react';
import './portfol.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className='head'>
        <header>
          <h1>Hi, Iam Harshavardhana SK</h1>
          <p className="title">welcome to my portfolio</p>
          {/* <nav className="navbar">
            <ul>
              <li><a href=".About">About</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav> */}
        </header>
      </div>

      <div className='About'>
  <div className="about-info">
    <div className="about-text">
      <h1>HARSHAVARDHANA SK</h1>
      <p>A dedicated professional with a strong work ethic and proven leadership skills, specializing in computer applications. Adaptable and quick to learn, excels in dynamic environments. With a track record of guiding teams to successful work and project outcomes, brings a disciplined and determined approach. Passionate about front-end development, is committed to continuous growth and making impactful contributions.</p>
    </div>
  </div>
</div>


      <div className='AcademicDetails'>
        <h2>Academic Details</h2>
        <ul>
          <li>
            <h3>St Joseph’s College, (Autonomous) Bangalore - Degree    2024 </h3>
            <p>Bachelors in Computer Applications ( BCA ) </p>
          </li>
          <li>
            <h3>St Joseph’s Pre-University College, - PU       2021</h3>
            <p>Computer Science, Statistics ,Business Studies and Accounts ( CSBA )</p>
          </li>

          <li>
            <h3>St Francis High School, Bangalore - School     2019</h3>
            <p>SSLC</p>
          </li>
          {/* Add more academic details if needed */}
        </ul>
      </div>

      <div className='Certifications'>
        <h2>Certifications</h2>
        
            <h3>HTML and CSS (UDEMY)</h3>
            <h3>JAVASCRIPT   (INFOSUS)</h3>
            <h3>REACT JS (UDEMY) ONGOING </h3>
            <h3>MERNSTACK- FULLSTACK DEVELOPER(NULL CLASS)</h3>
            
          
      </div>


      <div className='Projects'>
          <div className="project1">
            <h3>HOME PAGE DESIGN</h3>
            <p>Initiated web development by designing a project using HTML and CSS, establishing the foundational understanding.
it consists of a login page and basic single-page website where it tells the users about the different cuisine available in the site
</p>
            <a href="https://harshavardhanask.github.io/HOME-PAGE/" className="project-link">View Project</a>

          </div>

          <div className="project1">
            <h3>CLONE KPSC</h3>
            <p>Created a clone of the KPSC (Karnataka Public Service Commission) website. Enhanced HTML and CSS proficiency through this project. This clone consists of just the home page of the KPSC website. It was a task taken to check how well I can clone the websites.</p>
            <a href="https://harshavardhanask.github.io/CLONE/" className="project-link">View Project</a>
          </div>

          <div className="project1">
          <h3>TO-DO LIST</h3>
            <p>Expanded skillset by creating a TODO list with HTML, CSS, and JavaScript, 
with the help of this application one can note down what are their thing do be done and remove each task once they are completed.
</p>
            <a href="https://harshavardhanask.github.io/TO-DO-LIST/" className="project-link">View Project</a>
          </div>


          

          <div className="project1">
          <h3>QR CODE generator</h3>
            <p>Developed a QR code generator project utilizing HTML, CSS, JavaScript, and integrating an API for enhanced functionality. Incorporated API usage into the QR code generator project, expanding technical skills and practical knowledge in web development.</p>
            <a href="https://harshavardhanask.github.io/QR-code-generator/" className="project-link">View Project</a>
          </div>
      </div>

      <div className='projects2'>
      <div className="Project2">
      <h3>Login Page</h3>
            <p>Developed a login page using React, showcasing proficiency in building user interfaces and components.
Applied React to create a functional login page, demonstrating practical skills in front-end development and state management.
</p>
            <a href="https://harshavardhanask.github.io/login-react/" className="project-link">View Project</a>
          </div>

          <div className="Project2">
      <h3>BIKE ACCESSORIES</h3>
            <p>Developed a Bike Accessories Website using HTML and CSS and JavaScript, reinforcing practical skills.
It is a website where we can check the products offered by the company.it consists of all the images of their products where a person can buy and view the products it also includes password validation using JavaScript.</p>
            <a href="https://harshavardhanask.github.io/Bike-store/" className="project-link">View Project</a>
          </div>    

      </div>
      
      <div className='Skills'>
      
      <div className='skills'>
        <div className='b1'>
        <h2>SKILLS</h2>
        <p>
            HTML (Intermediate)<br></br>
            css  (Intermediate)<br></br>
            JavaScript(Intermediate)<br></br>
            React JS (Intermediate)<br></br>
        </p>
        </div>

        <div className='b2'>
        <p>
            Video editing<br></br>
            Poster making<br></br>
            MS Office<br></br>
            Graphic Desigining<br></br>
        </p>

        
        </div>

        <div className='b3'>
            <p>
            <h2>SOFT SKILLS</h2>
            Team work<br></br>
            Decision-making<br></br>
            Problem Solving<br></br>
            Critical Thinking<br></br>
            </p>
        </div>

        <div className='b4'>
            <p>
            <h2>HOBBIES</h2>
            Travelling<br></br>
            Desigining<br></br>
            Public Speaking<br></br>
            Community Service<br></br>
            </p>
            </div>

            <div className='b5'>
            <p>
            <h2>STRENGTHS</h2>
            Positive Thinking<br></br>
            Time Management<br></br>
            Leadership<br></br>
            Communication<br></br>
            </p>
        </div>

        <div className='b6'>
            <p>
            <h2>INTERESTS</h2>
            Video Editing<br></br>
            Adventure Sports<br></br>
            Trekking<br></br>
            Hiking<br></br>
            UI/UX Desigining<br></br>
            Promt Writing<br></br>
            </p>
        </div>

        <div className='b7'>
            <p>
            <h2>Languages</h2>
           English<br></br>
           Kannada<br></br>
           Tamil<br></br>
           Hindi<br></br>
            </p>
        </div>
    
        

        
      </div>
      
      </div>

      <div className='Fotter'>
        
            <p> Contact <br></br> +91 83105 27468</p>
            <p> Gmail<br></br>nishanthharsha23@gmail.com</p>
            <p> Address<br></br>#521, 3rd Main, Koramangala, Bangalore, Karnataka 560 095 </p>
            <div className='LINKS'>
            <p><a href="https://www.linkedin.com/in/harshavardhana-s-k-896a82246/">LinkdIn Profile</a></p>
            </div>
            
        
      </div>




      

      
    </div>
  );
};

export default Portfolio;
