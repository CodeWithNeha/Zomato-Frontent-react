import React from 'react'
import food from '../assets/food1.mp4';
export default function Video(props) {
    return (
        <div id="VideoParent">
    
      <div className= "Vchild2">
      </div>
      <div className="Vchild1">
        <video width="300" height="150" controls>
          <source src={food} type="video/mp4" />
        </video>
        </div>

        <p className= "VideoText">
          {props.content}
        </p>
  </div>
    )
}
