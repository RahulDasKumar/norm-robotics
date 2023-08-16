import React, {useEffect} from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './Divider.css'
import { ParallaxBanner } from "react-scroll-parallax"

gsap.registerPlugin(ScrollTrigger)

const TextDivider = ({ title, subtitle , color}) => {

    return (
        <div className="text__divider" style={{backgroundColor : `${color}` }}>
            <div className="text__wrapper">
                <h1>{title}</h1>
            </div>
            <div className="text__wrapper">
                <h2>{subtitle}</h2>
            </div>
        </div>
    )
}


const PictureDivider = ({image1,image2}) =>{


    return (
        <div className="picture__divider">
            <div className="parallax_container">
                <ParallaxBanner layers={[{ image: image1, speed: -40, style: {  } }, { image: image2, speed: -15}]} style={{ aspectRatio: '2 / 1', height: '100%' , backgroundSize:'contain'}} className="parallax"></ParallaxBanner>
            </div>
        </div>
    )
}

export  {TextDivider,PictureDivider}