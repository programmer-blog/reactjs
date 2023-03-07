// import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass"
//import ProfileFunctionalComponent from "./Profile"

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This is about page of Food Villa Restaurant</p>
            <Profile name={"Programmer"} />
        </div>
    )
}

export default About;