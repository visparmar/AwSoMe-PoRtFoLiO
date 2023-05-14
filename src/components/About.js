import React from 'react'
import info from '../Assets/progilell.jpg'

import  {timelineElement} from "../components/ProjectData.js"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

<div className='horizontal-li'></div>

<VerticalTimeline
lineColor={"aqua"}
>
  {
    timelineElement.map((e)=>{
    // 
      // let isWorkIcon=e.icon;
        return(
          <VerticalTimelineElement
          key={e.key}
          iconStyle={{ background: '#00FFFF', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #00FFFF' }}
          
          contentStyle={{ background: '#808080', color: '#fff' }}
          
          // date={e.date}
          dateClassName='date'
          
          description={e.description}
          // icon={<KIET/>}
          >
<h3>{e.Degree}</h3>
<p>{e.college}</p>
<p>{e.date}</p>
          </VerticalTimelineElement>
        );
    })
  }
</VerticalTimeline>

<div className="timeline">

</div>

      </div>
    </div>
  )
}

export default About
