import React, {useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import './RobotIntro.css'
import { gsap } from "gsap";


const RobotIntro = ({image1,image2,title}) =>{
    useEffect(()=>{
        let mediaResponsive = gsap.matchMedia()
        mediaResponsive.add("(min-width: 100px)",()=>{
             gsap.context(()=>{
            gsap.fromTo('.robot__parallax', {
                scale: 1.2,
            }, {
                scale: 1,
                duration: '4',
                ease: 'power2',
                delay: '.2',
            })
   
        })})

    },[])
    return(
        <div className="robot__intro">
            <div className="robot__title">
            <h1>{title}</h1>
            </div>
            <ParallaxBanner layers={[{ image: image1, speed: -20},{image:image2,speed:-8}]} className="robot__parallax"/>
        </div>
    )
}


export default RobotIntro;