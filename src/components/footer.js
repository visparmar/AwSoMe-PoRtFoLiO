import React from 'react'

function footer() {
  return (
    <section className="contact-us">
        <div className="container">
            <div className="contact-wrapper">
                <div className="form-text">
                    <div className="subtitle">
                        Contact Us
                    </div>
                    <div className="get-in">
                    <h2>GET</h2><h2>IN </h2> <h2>TOUCH</h2>
                    </div>
                    
                </div>

                <form >
                    <div className="first-column">
                        <div className="input-row">
                           
                            <input type="text" id='name' name='user_name' placeholder='Your Name'/>
                        </div>

                        <div className="input-row">
                         
                            <input type="text" id='subject' name='subject' placeholder='Enter Subject...'/>
                        </div>

                        <div className="input-row">
                            
                            <input type="email" id='semail' name='user_email' placeholder='Your Email..'/>
                        </div>
                        <div className="input-row">
                          
                            <textarea type="text" id='message' name='message' className='txtarea' placeholder='Type you message....'/>
                        </div>

                        <div className="input-row">
                        
                            <button type='submit'>Submit</button>
                        </div>
                    </div>

                    

                </form>
            </div>
        </div>
    </section>
  )
}

export default footer
