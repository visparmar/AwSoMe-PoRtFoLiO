import React from 'react'
import Pro from '../Assets/projects (1).svg'

function Projects() {
  return (
    <div className='z-black'>
      <div className="uppercontainer">
        <div className="text">
          <p>Most of my projects revolve around applied articifial 
            intelligence with majority of them having end to end deployment. 
            Additionally, I maintain certain community supported open source 
            projects too.</p>
        </div>
        <div className="photo">
<img src={Pro} alt="" />
        </div>
      </div>

      <div className="lower-container">
        <div className="mid-container">

       
        <div className= "container">
    <div className = "card">
      <div className = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className ="content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </div>

  <div className= "container">
    <div className = "card">
      <div className = "image">
        <img href = "#" src = "https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
      </div>
      <div className ="content">
        <h3>This is content</h3>
        <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
      </div>
    </div>    
  </div>
  
 

 
      

        </div>
      </div>
    </div>
  )
}

export default Projects
