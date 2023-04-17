import React,{useEffect} from 'react'
import Pro from '../Assets/projects (1).svg'
import { motion ,useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer";

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

      <motion.div className="lower-container"
>
        <div className="mid-container">

       
        <motion.div className= "container"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true,amount:0.5}}
          transition={{staggerChildren:0.5}}
          variants={textAnimate}>
    <div className = "card">
      <div className = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className ="content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </motion.div>
  <motion.div className= "container"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true,amount:0.5}}
          transition={{staggerChildren:0.5}}
          variants={textAnimate}>
    <div className = "card">
      <div className = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className ="content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </motion.div>
  <motion.div className= "container"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true,amount:0.5}}
          transition={{staggerChildren:0.5}}
          variants={textAnimate}>
    <div className = "card">
      <div className = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className ="content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </motion.div>
  <motion.div className= "container"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true,amount:0.5}}
          transition={{staggerChildren:0.5}}
          variants={textAnimate}>
    <div className = "card">
      <div className = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className ="content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </motion.div>
  <motion.div className= "container"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true,amount:0.5}}
          transition={{staggerChildren:0.5}}
          variants={textAnimate}>
    <div className = "card">
      <div className = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className ="content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </motion.div>
  <motion.div className= "container"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true,amount:0.5}}
          transition={{staggerChildren:0.5}}
          variants={textAnimate}>
    <div className = "card">
      <div className = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className ="content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </motion.div>
  <motion.div className= "container"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true,amount:0.5}}
          transition={{staggerChildren:0.5}}
          variants={textAnimate}>
    <div className = "card">
      <div className = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className ="content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </motion.div>
  <motion.div className= "container"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true,amount:0.5}}
          transition={{staggerChildren:0.5}}
          variants={textAnimate}>
    <div className = "card">
      <div className = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className ="content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </motion.div>
  <motion.div className= "container"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true,amount:0.5}}
          transition={{staggerChildren:0.5}}
          variants={textAnimate}>
    <div className = "card">
      <div className = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className ="content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </motion.div>
  <motion.div className= "container"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:true,amount:0.5}}
          transition={{staggerChildren:0.5}}
          variants={textAnimate}>
    <div className = "card">
      <div className = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className ="content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </motion.div>

 




  



 

  
 

 
      

        </div>
      </motion.div>
    </div>
  )
}

export default Projects
