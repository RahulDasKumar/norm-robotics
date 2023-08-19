import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import './Nav.css'

const Nav = () => {
    gsap.registerPlugin(ScrollTrigger)
    const bodyScrolling = ScrollTrigger.create({
        trigger:'#root',
        start: 'top top'
    })
    const [nav,setNav] = useState(true)
    useEffect(()=>{
        if(!nav){
            gsap.to('.nav',{y:-100,duration:.5})
        }
        if(nav){
            gsap.to('nav',{y:0,duration:.5})
        }
    }
    ,[nav])
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            let velocity = bodyScrolling.getVelocity()
            if(nav && velocity > .3) setNav(false)
            else setNav(true)
        })
        
    },[])



    return (
        <nav className="nav">
            <Link className="nav__link" to="/norm-robotics" data-link-alt="Home">
                <span>Home</span>
            </Link>
            <Link className="nav__link" to="/roles" data-link-alt="Roles">
                <span>Roles</span>
            </Link>
            <Link className="nav__link" to="/vex-robotics" data-link-alt="Vex Robotics">
                <span>Vex Robotics</span>
            </Link>
            <Link className="nav__link" to="https://crowdfund.charlotte.edu/project/37851/donate" target='_blank' data-link-alt='Donate'>
                <span>Donate</span>
            </Link>
            <Link className="nav__link" to="https://ninerengage.charlotte.edu/organization/norm-robotics" target='_blank' data-link-alt='Join'>
                <span>Join</span>
            </Link>
        </nav>
    )
}

export default Nav