import './App.css';

import logo from './img/logo1.png'
import project1 from "./img/project-1.png"
import project2 from "./img/project-2.png"
import project3 from "./img/project-3.png"
import skill1 from "./img/html5.png"
import skill2 from "./img/csslogo.png"
import skill3 from "./img/JSlogo.png"
import skill4 from "./img/reactlogo.png"



function App() {
  

  return (
   
    <div>

<header>
	<img src={logo} alt="MS Logo" class="logo" />
	<nav>
		<ul>
			<li><a href="http://localhost:3000/">Home</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#projects">Projects</a></li>
		</ul>
	</nav>
</header>

<section class="home-hero ">
	<div class="container">
		<h1 class="title"> Muhammad Saad <span>Front-End Web Developer</span>
		</h1>
		<a href="https://www.linkedin.com/in/muhammad-saad-ms10/"  rel="noreferrer" class="button button-accent" target="_blank" >Contact Me</a>
	</div>
  <div id="about" ></div>
</section>
<div class="container">
	<section class="home-about" >

		<div class="home-about-textbox ">
			<h1 >WHO I AM </h1>
			<p>Hi My name is Muhammad Saad.<br/>
				A passionate front end website developer who always strive for more knowledge and to learn new skills </p>
			<p>I have done <strong>Bachelors In Software Engineering</strong> from Sirsyed Universirty of Eng. And Technology.Curently working as a  <strong>Web Developer</strong>
			At Gottlich Concepts</p>
		</div>
	</section>
</div>





<section class="portfolio" id="projects">
	<h1 style={{fontWeight: "bolder"}}>SOME OF MY PROJECTS</h1>

	
	<figure class="port-item">
		<img src={project1} alt="STICKY APP"/>
    {/* <img src="./img/project-1.png" alt="STICKY APP"/> */}
		<figcaption class="port-desc">
			<p>STICK-IT NOTES</p>
			<a href="https://saad-stickitapp.netlify.app/" class="button button-accent button-small">Visit Website</a>
     
      <a href="https://github.com/SaadMS10/ES6/" target="_blank"  rel="noreferrer" class="button button-accent button-small">Github Code</a>

		</figcaption>
	</figure>

	<figure class="port-item">
		<img src={project2} alt="Covid 19 Tracker"/>
		<figcaption class="port-desc">
			<p>Covid 19 Tracker</p>
			<a href="https://saaad-covid.netlify.app/" class="button button-accent button-small">Visit Website</a>
     
      <a href=" https://github.com/SaadMS10/saaad-covid-tracker" target="_blank"  rel="noreferrer" class="button button-accent button-small">Github Code</a>
    </figcaption>
	</figure>

	<figure class="port-item">
		<img src={project3} alt="Quiz App"/>
		<figcaption class="port-desc">
			<p>Quiz App</p>
			<a href="https://saad-quizapp.netlify.app/" class="button button-accent button-small">Visit Website</a>
      
    <a href="https://github.com/SaadMS10/saad-quizapp-deployed" target="_blank"  rel="noreferrer"  class="button button-accent button-small">Github Code</a>
		</figcaption>
	</figure>
  </section>
 <section class="skills">
	<div class="container">
 
		<h1 class="title title-cta">MY TOP SKILLS </h1>
			 <figure >
         <img  class="skills-item" src={skill1} alt="html5" />   
         <img class="skills-item"  src={skill2} alt="css" />   
         <img class="skills-item" src={skill3} alt="bootstrap" />   
         <img class="skills-item" src={skill4} alt="javascript" />   

       
       </figure>

       
	</div>
</section>


<section class="cta">
	<div class="container">
		<h1 class="title title-cta">Like what you see?
			 <span>Want  to see how the code works?</span>
		</h1>
		<a href="https://github.com/SaadMS10/" target="_blank"  rel="noreferrer" class="button button-dark">Visit Github</a>
	</div>
</section>





      
    </div>
  );
}

export default App;
