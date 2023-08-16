import React,{useLayoutEffect} from "react";
import './Description.css'
import { ParallaxBanner } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
const Description = ({children,images,size,color}) =>{
    
   useLayoutEffect(()=>{
       const description = gsap.utils.toArray('.description__text')
       description.forEach((text, i) => {
           let animateWords = gsap.fromTo(text, { opacity: 0 }, { opacity: 1, duration: 1 })
           ScrollTrigger.create({
               trigger: text, animation: animateWords, start: 'top bottom',
           })
       })
   },[])


    return (
        <div className="description__section" style={{ backgroundColor: `${color}` }}>
            <div className="description__text">
                {children}
            </div>
                <ParallaxBanner layers={[{ image: images, speed: -8 }]} className={`description__image ${size}`} />
        </div>
    )
}


const complexDescription = (children,images,color,size) =>{


    return (
        <div className="description__section" style={{ backgroundColor: `${color}` }}>
            <div className="description__text">
                {children}
            </div>
            <ParallaxBanner layers={[{ image: images, speed: -8 }]} className={`description__image ${size}`} />
        </div>
    )
}




export  {Description,complexDescription};
