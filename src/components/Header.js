import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png"
import useAuth from "../utils/useAuth";
import { useContext, useState } from "react";
import UserContext from "../utils/userContext";

const loggedInUser = () => {
    //Api call to authenticate user
    return true;
}

const Title = () => (
    <a href="/">
        <img className="h-28 p-2"
            src={Logo} />
    </a>
)

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user } = useContext(UserContext);
    //const isLoggedIn = useAuth();

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    <Link to="/"><li className="px-2">Home</li></Link>
                    <Link to="/about"><li className="px-2">About</li></Link>
                    <Link to="/contact"><li className="px-2">Contact</li></Link>
                    <li className="px-2">Cart</li>
                    <Link to="/instamart"><li className="px-2">Instamart</li></Link>
                </ul>
            </div>
            <h1 className="p-10 font-bold text-red-900 ">Welcome: {user.name}</h1>
            {
                isLoggedIn ? <button onClick={() => { setIsLoggedIn(false) }}>Logout</button> :
                    <button onClick={() => { setIsLoggedIn(true) }}>Login</button>
            }

        </div>
    )
}
export default Header;