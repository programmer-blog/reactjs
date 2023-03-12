import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Logo from "../assets/images/logo.png"
import useAuth from "../utils/useAuth";
const loggedInUser = () => {
    //Api call to authenticate user
    return true;
}
//Javascrit expression {} work inside {}
const Title = () => (
    <a href="/">
        <img className="logo"
            src={Logo} />
    </a>
)

const Header = () => {

    const isLoggedIn = useAuth();

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/instamart"><li>Instamart</li></Link>

                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn ? <button onClick={() => { setIsLoggedIn(false) }}>Logout</button> :
                    <button onClick={() => { setIsLoggedIn(true) }}>Login</button>
            }

        </div>
    )
}
export default Header;