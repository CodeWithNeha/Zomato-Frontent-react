import React from 'react'
import rest1Pic from '../assets/restaurant1.jpg'
import rest2Pic from '../assets/restaurant2.jpg'
import rest4Pic from '../assets/restaurant4.jpg'
import rest3Pic from '../assets/restaurant3.jpg'

export default function Restaurants(props) {
    return (
        <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="ordText fw-bold">
              {props.content}
            </h1>
        </div>
        <div className="col-6 col-md-6">
          <img className= "rest1" src={rest1Pic} alt="" />
          <img className= "rest2" src={rest2Pic} alt="" />
          
          <img className= "rest3" src={rest4Pic} alt="" />
          <img className= "rest4" src={rest3Pic} alt="" />
        </div>
      </div>
    )
}
