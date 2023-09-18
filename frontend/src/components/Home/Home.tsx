import React, {FC} from 'react'
import '../../static/Home.css'
import {SectionWithEffect} from './SectionWithEffect'
import Logos from './Logos/Logos'

export const Home: FC = () => {
  return (


<div className="scrollpage">
    <SectionWithEffect>
      <h1>Hello</h1>
    </SectionWithEffect>
  
    <SectionWithEffect>

      <p>
          My name is Lubomyr Mashtalyar
          I'm Python Full-Stack Developer.
          I will create any website for you needs.
      </p>
    
  </SectionWithEffect>

  <SectionWithEffect>

    <h1>My stack</h1>
    <Logos 
      images={[{
        img: 'asdfasdf',
      }]}
    />
  
  </SectionWithEffect>


  <SectionWithEffect>

    <h2>About me</h2>
    <p className="about-me">
      My name is Lubomyr Mashtalyar, 14 y.o. lives in Ukraine, Ternopil.
      I very loves create a websites. My skils is speed, comunication, 
      understand english, fast search information, more ideas, can write a understanding and beautiful code,
      big phantasy, solve bugs skill, learn new things quickly skill, overcoming fears, smart,
      creative. I'am eager to develop my career. I also good understand math. Programming is my magic.
      I am not scared to take risks. I achieve my goals no mater what.
    </p>

  </SectionWithEffect>

  <SectionWithEffect>

    <h2>My social networks</h2>
    <h4>Phone: +380680752960</h4>

    <div className="logos">

      <div className="logo hidden">
        <a href="https://github.com/MixFix7">
         <img 
          className="github-logo" 
          src="{% static 'images/github_logo2.png' %}" 
          alt="github"
        />
        </a>
      </div>

      <div className="logo hidden">
        <a href="https://www.fiverr.com/mixfix1">
         <img 
          src="{% static 'images/fiverr.png' %}" 
          alt="fiverr"
        />
        </a>
      </div>
    
      <div className="logo hidden">
          <img src="{% static 'images/telegram.png' %}" alt="telegram"/>
          <span className="id-telegram">@MixFix7L</span>
     </div>
   
      <div className="logo hidden copy-container">
        <input type="text" id="text-copy"/>
        <button className="btn-copy">
          <img src="{% static 'images/gmail.png' %}" alt="gmail/" className="gmail-img"/>
        </button>
        <span className="copy-status">Email copied</span>
     </div>
   
     <div className="logo hidden">
      <a href="https://leetcode.com/MixFix/">
        <img className="gmail-img" src="{% static 'images/leetcode.jpg/' %}" alt="leetcode"/>
       </a>
    </div>
    </div>
  </SectionWithEffect>

  <SectionWithEffect>
    <h2>My projects</h2>
    <div className="projects-links">  
      <a className="projects-button" href="{% url 'projects' %}">Projects</a>
    </div>

  </SectionWithEffect>


</div>

  )
}
