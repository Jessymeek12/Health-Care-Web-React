import React from 'react'
import vector1 from "../../assets/Vector.png"
import "./Clients-style.css";
import vector from "../../assets/Vector.png"

const Clients = () => {
  return (
    <div className='clients' style={{textAlign: 'center',paddingTop: 40, justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.45)', height:400}}>
        <h5 style={{color: "#47a4de"}}>TESTIMONY</h5>
                <h1 style={{color: "white"}}>What Our Clients Say</h1>
                <img src={vector1} alt="" />
                <p style={{color: "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<br/> ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


         <div class="col-sm-6 col-lg-4">
        <div className="card mt-4">
          
          <img src={vector} alt="" />
          <div class="card-body">
            <h5 class="card-title">Free Sample</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
              <a href="http://">let's Go</a>
            {/* <a href="#" class="btn btn-primary">Let's Go!</a> */}
          </div>
        </div>
      </div>       
    </div>
    
  )
}

export default Clients