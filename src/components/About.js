import React from 'react'
import info from '../Assets/progilell.jpg'

function About() {
  return (
    <div>
      <div className="About-me">
        {/* <h1 className='me'>About Me</h1> */}


        <div className="con-tain-er">

          

          <div className="info--">
            <p> My Name is Vikas Parmar and i Like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <span>Language Speak :- C, C++, Java, JavaScript,HTML, CSS, Sass, Git</span>
          </div>

          <div className="img">
          <img src={info} alt="" />
          </div>

        </div>

      </div>
      <div className="education">
<p>Education</p>
      </div>
    </div>
  )
}

export default About
