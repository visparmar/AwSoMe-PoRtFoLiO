import React, { useState } from 'react'
import Sign from "../Assets/orisign.png"
import { Link } from 'react-router-dom';

import { Sling as Hamburger } from 'hamburger-react'

function Navigation() {

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
          <Hamburger className="hamburger" id="hamburger"/>
        </div>
        <ul>


          <Link style={{textDecoration: 'none'}} to={"/"}><li>Home</li></Link>
          {/* <Link style={{textDecoration: 'none'}} to={"/Skills"}><li> Skills</li></Link> */}
          <Link style={{textDecoration: 'none'}} to={"/Projects"}><li>Projects</li></Link>
          <Link style={{textDecoration: 'none'}} to={"/About"}><li>About</li></Link>
          {/* <Link style={{textDecoration: 'none'}} ><button>Download Cv</button></Link> */}
          <Link
          style={{textDecoration: 'none'}}
        to={"https://drive.google.com/u/0/uc?id=15_cbINjOV4S4MSa8RFwE890Kc1SJEef8&export=download"}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
        <li> Download Cv</li>
       
      </Link>
        </ul>
        <div className='sidebar' style={{display:toggle?'flex':'none'}}>
        <ol>


        <Link style={{textDecoration: 'none'}} to={"/"}><li>Home</li></Link>
          {/* <Link style={{textDecoration: 'none'}} to={"/Skills"}><li> Skills</li></Link> */}
          <Link style={{textDecoration: 'none'}} to={"/Projects"}><li>Projects</li></Link>
          <Link style={{textDecoration: 'none'}} to={"/About"}><li>About</li></Link>
          <Link style={{textDecoration: 'none'}} ><button>Download Cv</button></Link>
        </ol>
      </div>
      </div>

    </nav>
  )
}

export default Navigation
