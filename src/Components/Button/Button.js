import { Link } from "react-router-dom";
import React from "react";
import './Button.css'
const Button = ({endpoint}) =>{
    return (
        <div >
            <Link to = {`${endpoint}`}>
                <button className="button">Learn More</button>
            </Link>
        </div>
    )
}

const BackButton = () =>{
    return(
    <Link to={'/roles'}>
    <div className="arrow"></div>
    </Link>
    )
}

const IntroButton = () =>{
    return(
        <Link to={'https://ninerengage.charlotte.edu/organization/norm-robotics/contact'} target="_blank">
        <button className="intro__button"></button>
        </Link>
    )
}

export  {Button,BackButton,IntroButton}