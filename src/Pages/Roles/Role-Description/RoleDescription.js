import React, { useEffect,useRef } from "react";
import Nav from "../../Nav/Nav";
import './RoleDescription.css'
import Animate from "../../../Components/AnimatePage/Animate";
import { gsap } from "gsap";
import { BackButton } from "../../../Components/Button/Button";
const SoftwareDescription = () =>{

    useEffect(()=>{
        window.scrollTo(0, 0)
        gsap.context(()=>{
            gsap.fromTo('p', { opacity: 0 }, { opacity: 1, duration: 6 })
            gsap.fromTo('h1', { opacity: 0 }, { opacity: 1, duration: 6 })
        })
    },[])
    return (
        <section className="role__description">
            <Nav></Nav>
            <Animate></Animate>
            <h1>Software</h1>
            <p>What does the software role in Norm Robotics do? Well, they make the software of the robots  duh! But let's go a little bit deeper. Most of the software being written will be used to control the robots to complete the various complex tasks in a vex robotics competition. You will be working on coding things that control motion control units, help visual sensors etc. The coding languages used for this will mainly be C++ and Python, and no prior experience is required.
            Joining this role will not only give you experience working with exciting technology, but a place to collaborate with like minded people.</p>
            <BackButton/>
        </section>
    )
}

const MechanicalDescription = () => {

    useEffect(() => {
        gsap.context(() => {
            gsap.fromTo('p', { opacity: 0 }, { opacity: 1, duration: 6 })
            gsap.fromTo('h1', { opacity: 0 }, { opacity: 1, duration: 6 })
        })
    }, [])
    return (
        <section className="role__description">
            <Animate></Animate>
            <Nav></Nav>
            <h1>Mechanical</h1>
            <p>Do you want to know how to make 3d models come to life? Do you want to be a part of making the coolest designs in robotics the world has ever seen? The mechanical role in Norm Robotics works on creating the actual robot. This role focuses on making the robots through a program called Auto Computer-Aided Design or ACAD for short, it’s a program where you can sculpt and design a robot. Not only that but you can virtually test its movements without making it in the real world. Almost every single architecture, house, building or manufacturing equipment was built on ACAD. So, whether you're a curious student or a seasoned designer, the mechanical role at Norm Robotics offers a unique opportunity to contribute to the world of robotics in a tangible and exhilarating way. Unleash your creativity, master the art of ACAD, and be a driving force behind the next generation of robotic wonders. Join us and be part of a team that transforms dreams into reality.
</p>
            <BackButton />
        </section>
    )
}


const ElectricalDescription = () => {

    useEffect(() => {
        gsap.context(() => {
            gsap.fromTo('p', { opacity: 0 }, { opacity: 1, duration: 6 })
            gsap.fromTo('h1', { opacity: 0 }, { opacity: 1, duration: 6 })
        })
    }, [])
    return (
        <section className="role__description">
            <Animate></Animate>
            <Nav></Nav>
            <h1>Electrical</h1>
            <p>The electronic role in Vex Robotics works on the hardware of the Robot. Unlike the software role, where you write code that executes actions for the hardware to follow, you work directly with the robot electrical systems. The technologies you will be working with include a micro controller which is the brains for the robot, a motor controller which moves the robot, and various kinds of sensors like gyroscopes and vision sensors. Not only would indulging this role be great for your resume, but the ability to work and collaborate with passionate students towards a common goal.
            </p>
            <BackButton />
        </section>
    )
}

const DocumentationDescription = () => {

    useEffect(() => {
        gsap.context(() => {
            gsap.fromTo('p', { opacity: 0 }, { opacity: 1, duration: 6 })
            gsap.fromTo('h1', { opacity: 0 }, { opacity: 1, duration: 6 })
        })
    }, [])
    return (
        <section className="role__description">
            <Animate></Animate>
            <Nav></Nav>
            <h1>Documentation</h1>
            <p>Documentation plays a pivotal role within a VEX robotics club that engages in building and competing with robots. It serves as the comprehensive record of the club's activities, designs, strategies, and outcomes. Through meticulous documentation, club members capture the evolution of their robots, detailing design concepts, component choices, programming code, and mechanical configurations. Not only that but they play a pivotal role during the competition, as they have to document the design process of the robot throughout the season so we can show a panel of judges at competitions.
            </p>
            <BackButton />
        </section>
    )
}

const OutreachDescription = () => {

    useEffect(() => {
        gsap.context(() => {
            gsap.fromTo('p', { opacity: 0 }, { opacity: 1, duration: 6 })
            gsap.fromTo('h1', { opacity: 0 }, { opacity: 1, duration: 6 })
        })
    }, [])
    return (
        <section className="role__description">
            <Animate></Animate>
            <Nav></Nav>
            <h1>Outreach</h1>
            <p>The outreach role within a VEX robotics club participating in robot building plays a critical role in extending the club's impact beyond the confines of its immediate activities. Outreach members actively engage with the community, local businesses, and potential sponsors to forge valuable partnerships that provide essential resources and support. Their efforts not only secure financial assistance but also foster a sense of shared purpose and collaboration within the community. By establishing connections with external entities, the outreach team promotes the club's mission, showcases its achievements, and generates interest in STEM education among a wider audience. Through outreach initiatives, such as workshops, demonstrations, and public presentations, they inspire and educate others about the exciting world of robotics. In doing so, the outreach team amplifies the club's influence, expands its reach, and contributes to a network of supporters who share in the enthusiasm for innovation and learning.
            </p>
            <BackButton />
        </section>
    )
}

const BusinessDescription = () => {

    useEffect(() => {
        gsap.context(() => {
            gsap.fromTo('p', { opacity: 0 }, { opacity: 1, duration: 6 })
            gsap.fromTo('h1', { opacity: 0 }, { opacity: 1, duration: 6 })
        })
    }, [])
    return (
        <section className="role__description">
            <Animate></Animate>
            <Nav></Nav>
            <h1>Business</h1>
            <p>The business role in VEX robotic plays a crucial role in ensuring the smooth operation and overall success of the club's activities. This dedicated group focuses on managing the logistical and administrative aspects, which are essential for the club's functioning. From coordinating meetings, organizing events, and handling communication with members and external parties, the business team takes charge of the behind-the-scenes tasks that contribute to the club's overall efficiency. By effectively managing schedules, resources, and communication, the business team allows the technical and creative aspects of robot building to thrive without distraction. Enables the entire club to concentrate on designing, constructing, and programming innovative robots for VEX competitions, fostering a well-rounded and successful robotics experience for all participants.

            </p>
            <BackButton />
        </section>
    )
}





export {SoftwareDescription,MechanicalDescription,ElectricalDescription,DocumentationDescription,OutreachDescription,BusinessDescription}