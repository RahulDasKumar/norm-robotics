import React, { useEffect, useLayoutEffect, useState} from "react";
import Intro from '../../Components/Intro/Intro'
import {TextDivider} from "../../Components/Dividers/Divider";
import Pallete from "../../Utils/Pallete";
import {Description} from "../../Components/DescriptionSection/Description";
import { ParallaxBanner } from "react-scroll-parallax";
import Nav from "../Nav/Nav";
import Logo from '../../Pictures/Symbol/Logo_White.jpg'
import Sky from '../../Pictures/uncc-pictures/sky-parallax.jpg'
import Campus from '../../Pictures/uncc-pictures/night-uncc-campus-scene1.jpg'
import { IntroButton } from "../../Components/Button/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
const AboutUs = () => {




    useLayoutEffect(() => {
        console.log(window.innerHeight)
        console.log(window.innerWidth)
        let ctx = gsap.context(() => {
            const description = gsap.utils.toArray('.description__text')
            console.log(description)
            description.forEach((text) => {
                console.log('its running inside the description.js')
                let animate = gsap.fromTo(text, { opacity: 0 }, { opacity: 1, duration: 3 })
                ScrollTrigger.create({ trigger: text, animation: animate, start: 'top bottom'})
            })
        })
        return ctx.revert()
    }, [])


    
    return (
        <div className="About-Us">
            <Nav />
            <Intro title={'Norm Robotics'} subtitle={'Breaking norms, one robot at a time.'} logo={Logo}>
                <ParallaxBanner layers={[{ image: Sky, speed: -40 }, { image: Campus, speed: -15, style: { marginTop: '10%' } }]} style={{ aspectRatio: '2 / 1', height: '100%' }} ></ParallaxBanner>
            </Intro>
            <TextDivider title={'About Us'} color={Pallete["Black"]}></TextDivider>
            <Description color={Pallete["Black"]} images={require('../../Pictures/Vex-Robotics-Pictures/BattleRobot.jpg')} size={'medium'}>
                <p>NORM Robotics was founded in 2023 by a group of students that are passionate about the world of competitive robotics. Many of our members have competed at the highest level of competition, the world championship, for their respective high school robotics programs: FIRST Robotics Competition, FIRST Tech Challenge, and VEX Robotics Competition. </p>
            </Description>
            <Description color={Pallete["Black"]} images={require('../../Pictures/uncc-pictures/uncc-inside-colored.jpg')} size={'medium'}>
                <p>
                    Our club is a vibrant community of like-minded individuals aiming to make a positive impact on campus and beyond.
                </p>
                <p>
                    We firmly believe that diversity in academic backgrounds enriches our collective experiences and strengthens our initiatives.
                    As such, we encourage students from every major to consider joining our team and becoming a part of something truly special.
                </p>
            </Description>
            <Description images={require('../../Pictures/Vex-Robotics-Pictures/Vex-Robot-Five.jpg')} size={'medium'}>
                <p>
                    Our members are prepared for the real world by having the opportunity to learn industry-applicable skills. Through building robots we gain hands-on experience with CAD design, C++ programming, fabrication with 3D printers and CNC machines, technical writing, project management, and leadership skills, all of which will directly lead to successful careers after college. By supporting NORM Robotics you are investing in the future of the STEM industry.
                </p>
            </Description>
            <Description color={Pallete["Black"]} images={require('../../Pictures/uncc-pictures/vex-tournament.jpg')} size={'medium'}>
                <p>
                    No matter if you excel in data analysis, creative storytelling, project management, public speaking, marketing, or any other discipline, your talents are valued and sought after here
                </p>
            </Description>
        </div>
    )
}
export default AboutUs