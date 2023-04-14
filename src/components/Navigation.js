import React, { useState } from 'react'
import Sign from "../Assets/sign-removebg-preview.png"
import { Link } from 'react-router-dom';

import { Sling as Hamburger } from 'hamburger-react'

function Navigation() {
  const styles = {
    popup:{
      display:"flex",
      
    }
  };
  const [toggle, setToggle] = useState(false);
  const handleCondition = () => {
    setToggle(!toggle);
    console.log(toggle);
  }
  return (
    <nav className={` ${toggle ? "activeContainer" : ""}`}>


      
      <div className="containert">
     

        <img src={Sign} alt="" />
        <div className="burger" onClick={handleCondition}>
          <Hamburger className="hamburger" />
        </div>
        <ul>


          <Link style={{textDecoration: 'none'}} to={"/"}><li>Home</li></Link>
          <Link style={{textDecoration: 'none'}} to={"Skills"}><li> Skills</li></Link>
          <Link style={{textDecoration: 'none'}} to={"Projects"}><li>Projects</li></Link>
          <Link style={{textDecoration: 'none'}} to={"Testimonials"}><li>Testimonials</li></Link>
          <Link style={{textDecoration: 'none'}} to={"Contacts"}><li>Contacts</li></Link>
        </ul>
        <div className='sidebar' style={{display:toggle?'flex':'none'}}>
        <ol>


        <Link style={{textDecoration: 'none'}} to={"/"}><li>Home</li></Link>
          <Link style={{textDecoration: 'none'}} to={"Skills"}><li> Skills</li></Link>
          <Link style={{textDecoration: 'none'}} to={"Projects"}><li>Projects</li></Link>
          <Link style={{textDecoration: 'none'}} to={"Testimonials"}><li>Testimonials</li></Link>
          <Link style={{textDecoration: 'none'}} to={"Contacts"}><li>Contacts</li></Link>
        </ol>
      </div>
      </div>

    </nav>
  )
}

export default Navigation
