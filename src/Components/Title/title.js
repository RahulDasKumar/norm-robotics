import React, {useRef,useLayoutEffect} from "react";
import './style.css';


const Title = ({children,title,subtitle}) =>{



    return (
        <div className="title">
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