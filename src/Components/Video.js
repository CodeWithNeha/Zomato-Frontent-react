import React from 'react'
import food from '../assets/food1.mp4';
export default function Video() {
    return (
        <div id="VideoParent">
    
      <div class = "Vchild2">
      </div>
      <div class="Vchild1">
        <video width="300" height="150" controls>
          <source src={food} type="video/mp4" />
        </video>
        </div>

        <p class = "VideoText">
          Your food will be prepared safely with an experienced chef, without compromising on the quality and hygiene.
        </p>
  </div>
    )
}
