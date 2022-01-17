import React from 'react'
import card2Img from '../assets/pizza.jpg'
import card1Img from '../assets/burger.jpg'
import card3Img from '../assets/iceCream.jpg'

export default function Menu() {
    const myStyle = {color: "#ff0000"}

    const myStyle2 = {width: "18rem"}

    return (
        <div className="sha">
    <div className = "shape">
      
    </div>
    <h1 className="shapeText tw-bold">Explore our menu</h1>
    <div id = "card1" className="card" style={myStyle2} >
      <img className="card-img-top" src={card1Img} alt="Card image cap" />
      <div className="card-body">
        <h2 className="fw-bold">Burgers</h2><p className="card-text">Burger King, Mcdonalds, Burger Place <span style={myStyle}>+3</span>
        </p>
      </div>
    </div>
    <div id = "card2" className="card" style={myStyle2}>
      <img className="card-img-top" src={card2Img} alt="Card image cap" />
      <div className="card-body">
        <h2 className="fw-bold">Pizza</h2><p className="card-text">Pizza Hut, Domino's Pizza <span  style={myStyle}>+3</span>
        </p>
      </div>
    </div>
    <div id = "card3" className="card" style={myStyle2}>
      <img className="card-img-top" src={card3Img} alt="Card image cap" />
      <div className="card-body">
        <h2 className="fw-bold">Ice Creams</h2><p className="card-text">Baskin Robins, Ibaco <span id="sp" style={myStyle}>+3</span>
        </p></div>
    </div>
    <div className="viewText">
      <h1 className="view">View More</h1>
    </div>
    
    </div>
    )
}
