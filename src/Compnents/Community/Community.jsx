import React from 'react'
import elderly from "../../assets/elderly.png";
import vector from "../../assets/Vector.png";
import elderly1 from "../../assets/elderly1.png";

const Community = () => {
  return (
    <div className='community' style={{width:100}}>
      <div className='row communityRow' style={{paddingTop: 40, paddingBottom:40}}>
        <div className='col-md-6 col-sm-12'style={{paddingRight: 40, paddingLeft:60}}>
            <img src={elderly} alt="" />
            <h1 style={{color: "black"}}>Maintenance Exercise</h1>
            <img src={vector} alt="" />
            <p style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br/> luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum<br/> dolor sit amet, consectetur adipiscing elit.</p>

        </div>
        <div className='col-md-6 col-sm-12' style={{paddingLeft: 60}}>
            <h1 style={{color: "black"}}>Community Dining</h1>
            <img src={vector} alt="" />
            <p style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br/> luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum<br/> dolor sit amet, consectetur adipiscing elit.</p>
            <img src={elderly1} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Community