import React, {useRef,useLayoutEffect} from "react";
import { gsap } from "gsap";
import './style.css';


const Title = ({children,title,subtitle}) =>{
    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
        const titles = gsap.utils.toArray('.text__wrapper')
        titles.forEach((title)=>{
            gsap.fromTo(title, { opacity: 0 }, { opacity: 1, duration: 3, ease:'slow' })
        })    
        })
    },[])


    return (
        <div className="title" >
            <div className="text__wrapper">
                <h1>{title}</h1>
            </div>
            <div className="text__wrapper">
                <h2>{subtitle}</h2>
            </div>
            {children}
        </div>
    )
}

export default Title