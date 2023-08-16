import React,{useLayoutEffect,useRef,useEffect} from "react";
import { RobotOne,RobotTwo,RobotThree,RobotFour } from "../../Pictures/Vex-Robotics-Pictures/RobotPictures";
import Nav from "../Nav/Nav";
import './Robotics.css'
import RobotIntro from "../../Components/Intro/RobotIntro";
import { TextDivider } from "../../Components/Dividers/Divider";
import { Description } from "../../Components/DescriptionSection/Description";
const VexRobotics = () =>{

    return (
        <div>
        <div className="Vex__Robotics">
            <Nav></Nav>
            <RobotIntro image1={require('../../Pictures/Vex-Robotics-Pictures/Vex-Robot-Four.jpg')} image2={require('../../Pictures/Vex-Robotics-Pictures/Sparks.png')} title={'What is Vex Robotics?'}></RobotIntro>
            <TextDivider title={'Overview of Vex Robotics'}></TextDivider>
            <Description images={RobotOne}>
                    <p>VEX U teams build two robots (18" x 18" x 18" or approximately the size of a microwave) and at competition will play on a 12' x 12' field against another team of two robots. Teams work to complete tasks in a 45-second autonomous period where robots work off of pre-programmed instructions and then a following 75-second driver-controlled period where students will drive the robots with controllers. </p>
            </Description>
            <Description images={RobotTwo}>
                    <p>Match performance will be tracked throughout the day and a ranking list will be generated. At the end of the competition, a championship bracket will be played based on the rankings. Teams compete to win the bracket and winning teams will be able to advance to the next level of competition.</p>
            </Description>
            <Description images={RobotThree}>
                    <p>
                    The World Championship for VEX U takes place in Dallas, Texas in April of each year. Advancement slots are determined by previous performance in the robot game and judged awards. At the world championship, the top teams from across the globe come together to compete against each other and put their robots' performance to the test.
                    </p>
            </Description>
        </div>
        </div>
    )
}

export default VexRobotics;