import React from 'react'



const Footer = () => {
  return (
    <footer style={{backgroundColor: '#1e1e1e', padding:20, textAlign: 'center'}}>
    <div class="py-5">
      <h1  style={{color: 'white'}}>The Beat Elderly care</h1>
      <div class="col-lg-6 mx-auto">
        <p  style={{color: "white",marginBottom: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
        ullamcorper mattis, pulvinar <br/> dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div style={{justifyContent: 'center', display: 'flex', gap:5 }}>
          <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Find out more!</button>
          <button type="button" style={{color: "#47a4de"}}>Get in Touch</button>
        </div>
      </div>
    </div>
  </footer>  )
}

export default Footer