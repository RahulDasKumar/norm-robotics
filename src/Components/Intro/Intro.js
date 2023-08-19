import React, { useRef, useLayoutEffect } from "react";
import Title from "../Title/title";
import './Intro.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
const Intro = ({title, subtitle, logo,children}) => {
    gsap.registerPlugin(ScrollTrigger)
    const gearAnimation = useRef();

    useLayoutEffect(()=>{

        gsap.context(()=>{
            gsap.to(".logo-content", { rotation: 360, duration: 5 });

            const image = gearAnimation.current
            
            gsap.to(image, {
                rotation: 360,
                scrollTrigger: {
                    trigger: image,
                    start: 'top center',
                    scrub: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const rotationAmount = 360 * progress;
                        gsap.set(image, { rotation: rotationAmount });
                    },
                },
            });
        })
    },[])
    return (
        <div className="intro-section">
           {children}
            <Title
                title={title}
                subtitle={subtitle}
            >
                {logo && (<div className="logo-wrapper" ref={gearAnimation}>
                    <div className="logo-content">
                        <img className="logo" src={logo} alt="" />
                    </div>
                </div>)}
            </Title>
        </div>
    )
}

export default Intro