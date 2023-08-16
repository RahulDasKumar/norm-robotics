import React from "react";
import './Sections.css'
const Section = ({picture,children}) =>{
    return (
            <div className="scene">
                <img src={picture}></img>
                <div className="card__holder">
                    {children}
                </div>
            </div>
    )
}

export default Section;