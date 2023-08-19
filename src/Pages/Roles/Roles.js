import { ParallaxBanner } from "react-scroll-parallax";
import Nav from "../Nav/Nav";
import Pallete from "../../Utils/Pallete";
import Intro from "../../Components/Intro/Intro";
import {TextDivider} from "../../Components/Dividers/Divider";
import {Description} from "../../Components/DescriptionSection/Description";
import {Button} from "../../Components/Button/Button";
const Roles = () =>{

    
    return(
        <div>
            <Nav></Nav>
            <Intro title={'Roles'} subtitle={'Scroll down to see all the different roles we have for our club'}>
                <ParallaxBanner id="role-parallax"layers={[{ image: require('../../Pictures/uncc-pictures/sky-parallax.jpg'), speed: -40 }, { image: require('../../Pictures/Role-picture-gallery/good-night-picture-tint.png'), speed: -15, style: { marginTop: '18%' , backgroundSize:'cover' ,className:'campus-picture' } }]} style={{ aspectRatio: '2 / 1', height: '100%'  }} className="parallax"></ParallaxBanner>
            </Intro>
            <TextDivider subtitle={"Norm Robotics welcomes all types of students from all backgrounds and majors. Don't feel discouraged if you don't have a STEM background as there is no previous experience required "} color={Pallete["Black"]}></TextDivider>
            <Description images={require('../../Pictures/Role-picture-gallery/better-software.jpg')} size={'small'}>
                <h1>Software</h1>
                <p>In charge of the software of robots</p>
                <Button endpoint={'/software-description'}></Button>
            </Description>
            <Description images={require('../../Pictures/Role-picture-gallery/mechanical-2.jpg')}>
                <h1>Mechanical</h1>
                <p>Is responsible for making the actual robots</p>
                <Button endpoint={'/mechanical-description'}></Button>
            </Description>
            <Description images={require('../../Pictures/Role-picture-gallery/circuit-board.jpg')} size={'small'}>
                <h1>Electronics</h1>
                <p>Works on the electronics of the robots </p>
                <Button endpoint={'/electrical-description'}></Button>
            </Description>
            <Description images={require('../../Pictures/Role-picture-gallery/documentation.jpg')}>
                <h1>Documentation</h1>
                <p> Helps to write the documentation for the robot build process</p>
                <Button endpoint={'/documentation-description'}></Button>
            </Description>
            <Description images={require('../../Pictures/Role-picture-gallery/WorldMap.jpg')} >
                <h1>Outreach</h1>
                <p>Helps do outreach to organizations and helps to obtain sponsors</p>
                <Button endpoint={'/outreach-description'}></Button>
            </Description>
            <Description images={require('../../Pictures/Role-picture-gallery/business.jpg')} size={'small'}>
                <h1>Business</h1>
                <p>Helps with the business side of things, including setting up meetings and doing other menial tasks!</p>
                <Button endpoint={'/business-description'}></Button>
            </Description>

        </div>
    )
}



export default Roles;