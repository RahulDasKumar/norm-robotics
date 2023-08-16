import React, { useEffect, useLayoutEffect, useRef, } from "react";
import { gsap } from "gsap";
import { Transition,SwitchTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import './Animate.css'
const Animate = ({children}) =>{

    const banner = useRef()
    useEffect(()=>{
        if (banner.current) {
            gsap.fromTo(banner.current, {
            clipPath:' inset(0% 0% 0% 0%)'
        },{
            clipPath: 'inset(0% 0% 0% 100%)',
            duration: 3,
            ease:'power3.out',
            delay:1
        })
    };


    },[])
    
    return(
        <div className="banner_container" ref={banner}>
            {children}
        </div>
    )
}

export default Animate