import React from 'react'
import "./AboutUs-style.css";
import image from "../../assets/about.png";
import vector from "../../assets/Vector.png";


const AboutUs = () => {
  return (
    <div className='AboutUs'>
        <div className='row aboutRow'>
            <div className='col-md6 col-sm-12'>
                <img src={image} alt="" />
            </div>
            <div className='col-md6 col-sm-12 about-content' >
                <h5 style={{color: "#47a4de"}}>About Us</h5>
                <h3 style={{color: "black"}}>We Provide An Ideal Home Environment</h3>
                <img src={vector} alt="" />
                <p style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className='btn btn-primary'>Learn More</button>

            </div>

        </div>
    </div>
  )
}

export default AboutUs