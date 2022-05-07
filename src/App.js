import { useState } from 'react'
import Navbar from './Components/Navbar'
import { useSpring, animated } from 'react-spring'

import heroNFT from "./assets/nft.png"
import priceTag from "./assets/price.png"


function App() {
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div className="App">
        <Navbar/>
        <div className="relative" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div className="absolute" style={{ transform: props.xy.interpolate(trans1) }} ><img src={heroNFT} alt="nft"/></animated.div>
            <animated.div className="absolute" style={{ transform: props.xy.interpolate(trans1) }} ><img src={priceTag} alt="nft"/></animated.div>
        </div>
    </div>
  );
}

export default App;
