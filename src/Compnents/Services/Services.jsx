import React from 'react'
import "./Services-style.css"
import vector1 from "../../assets/Vector.png";
import clinic from "../../assets/Clinic.png";
import document from "../../assets/Document.png";
import wheelchair from "../../assets/Wheelchair.png";
import stethoscope from "../../assets/Stethoscope (1).png";


const Services = () => {
  return (
    <div className='services' style={{background: "#FAFBFF"}}>
        <h5 style={{color: "#47a4de"}}>About Us</h5>
                <h1 style={{color: "black"}}>Our Core Services</h1>
                <img src={vector1} alt="" />
                <p style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<br/> ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                <div className='row servicesRow'>
                  <div className='col-md-4 col-sm-12 ' >
                    <img src={clinic}style={{width:40, height:40}} alt="" />
                    <h4 style={{color: "black"}}>Nursing Home</h4>
                    <p style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>

                  </div>
                  <div className='col-md-4 col-sm-12 servicesRow' >
                    <img src={document}style={{width:40, height:40}} alt="" />
                    <h4 style={{color: "black"}}>Diet & Nutrition</h4>
                    <p style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>

                  </div>
                  <div className='col-md-4 col-sm-12 servicesRow' >
                    <img src={wheelchair}style={{width:40, height:40}} alt="" />
                    <h4 style={{color: "black"}}>Elder Care</h4>
                    <p style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>

                  </div>

                </div> 
                <div className='row servicesRow'>
                  <div className='col-md-4 col-sm-12 ' >
                    <img src={stethoscope}style={{width:40, height:40}} alt="" />
                    <h4 style={{color: "black"}}>Dementia Care</h4>
                    <p style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>

                  </div>
                  <div className='col-md-4 col-sm-12 servicesRow' >
                    <img src={document}style={{width:40, height:40}} alt="" />
                    <h4 style={{color: "black"}}>Stroke Care</h4>
                    <p style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>

                  </div>
                  <div className='col-md-4 col-sm-12 servicesRow' >
                    <img src={wheelchair}style={{width:40, height:40}} alt="" />
                    <h4 style={{color: "black"}}>Rehabilitation</h4>
                    <p style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>

                  </div>

                </div>     
    </div>
  )
}

export default Services