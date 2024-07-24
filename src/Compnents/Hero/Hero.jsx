import React from 'react'
import "./Hero-style.css"

const Hero = () => {
  return (
   <div>
     <div className='Hero'>
     <h1>Best Elder Care In <br/>London City</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
     <button className='btn btn-primary' style={{background:"#47A4DE"}}>Learn More</button>
     </div>
     <div className='row'>
        <div className='col-6 sm-12' style={{background: "#47a4de", width:"50%", height: "5px"}}>
        </div> 
        <div className='col-6 sm-12' style={{background: "#80BE43", width:"50%", height: "5px"}}>
        </div>      
     </div>
   </div>
  )
}

export default Hero