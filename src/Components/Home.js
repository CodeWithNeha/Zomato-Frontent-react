import React from 'react'
import pat from '../assets/svg/herobgpattren.svg';
import shape from '../assets/svg/heroShape.svg';
import her from '../assets/hero.jpg'
export default function Home() {
    return (
        <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="orderText">Order food from favourite restaurants near you.</h1>
            <button className="btn btn-danger OdBtn">Order Food</button>
          </div>
          <div id = "parent" className="col-6 col-md-6">
                <img className = "heropat" src={pat} alt="" />
                <img className = "herosh"  src={shape}alt="" />
                <img className = "hero"  src={her} alt="" />
                </div>
        </div>
        </div>
    )
}
