import React from 'react'
import Img1 from '../assets/rest1.jpeg'
export default function Footer(props) {
    const myStyle = {
        listStyleType: "none"
    }
    return (
      <>
      <div className="img1R">
      <div className="im"><img src={Img1} width="1120" height="400" class = "img1" alt="" /></div>
      <p className="img1Text">
       {props.text}</p> 
    </div>
    <div className="foot">
       
       <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="footText">zomato</h1>
        </div>
        <div className="col">
          <ul className= "footText2" style={myStyle}>
            <li>Pricing</li>
            <li>Terms and condition</li>
            <li>Partnership</li>
            <li>Career</li>
            <li>Contact</li>
          </ul> 
        </div>
      </div>
        </div>
        </div>
      </>
    )
}
