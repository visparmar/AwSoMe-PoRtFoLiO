import React from 'react'
import info from '../Assets/progilell.jpg'
import kiet from '../Assets/cbse.jpg'
import  {timelineElement} from "../components/ProjectData.js"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
  let iconStyle={ background: 'white',
  height:"100px",
  width:"100px",
  marginLeft:"-50px",
   color: '#fff',overflow:"hidden"}


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
          iconStyle={iconStyle}
          contentArrowStyle={{ borderRight: '8px solid  #00FFFF' }}
          
          contentStyle={{ background: '#808080', color: '#fff'}}
          
          // date={e.date}
          dateClassName='date'
          
          description={e.description}
          icon={<img src={e.icon} width="90" height="90" style={{marginTop:"5px",marginLeft:"5px"}}/>}
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
