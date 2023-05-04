import React,{useEffect} from 'react'
import Pro from '../Assets/header-male.svg'
import { motion ,useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer";
import Data from '../components/ProjectData'

const textAnimate={
  offscreen:{y:100, opacity:0},
  onscreen:{y:0,
  opacity:1,
transition:{type:"spring",
bounce:0.4,
duration:3}}
}



function Projects() {

const control = useAnimation();
const [ref, inView] = useInView();

useEffect(() => {
  if (inView) {
    control.start("visible");
  } else {
    control.start("hidden");
  }
}, [control, inView]);


  return (
    <div className='z-black'>
      <motion.div className="uppercontainer">
        <motion.div className="text"
        initial={"offscreen"}
        animate={"onscreen"}
        variants={textAnimate}>
          <p className='project-heading'>Projects</p>
          <p>Most of my projects revolve around Web-Development with majority of them related to frontend Technology. 
            Additionally, I am into competative programming as well as open Source contibution.</p>
        </motion.div>
        <motion.div className="photo"
        initial={"offscreen"}
        animate={"onscreen"}
        variants={textAnimate}>
<img src={Pro} alt="" />
        </motion.div>
      </motion.div>

      <motion.div className="lower--container"
>
        <div className="mid--container">


       {Data.map((data,index)=>{
        return(
          
          <motion.div className= "container" key={index}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true,amount:0.5}}
          transition={{staggerChildren:0.5}}
          variants={textAnimate}>
            
    <div className = "card">
      <div className = "image">
        <img href = "#" src = {data.Image}/>
      </div>
      <div className ="content">
        <h3>{data.Title}</h3>
        <p> {data.Desc}</p>
      </div>
    </div>    
  </motion.div>
        )

       })}


        </div>
      </motion.div>
    </div>
  )
}

export default Projects
