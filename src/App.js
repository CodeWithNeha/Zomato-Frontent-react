
import './App.css';
import Home from './Components/Home';
import Menu from './Components/Menu';

import Navbar from './Components/Navbar';
import Restaurants from './Components/Restaurants';
import Video from './Components/Video';

function App() {
  return (
    <>
    <Navbar title="zomato"/>
    <Home food="Order food from favourite restaurants near you."/>
    <Video content="Your food will be prepared safely with an experienced chef, without compromising on the quality and hygiene."/> 
    <Menu explore="Explore our menu"/>
    <Restaurants content="Order From 100s of restaurants" />
    </>
  );
}

export default App;
