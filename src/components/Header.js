import { useState } from "react/cjs/react.development";

const loggedInUser = () => {
    //Api call to authenticate user
    return true;
}
//Javascrit expression {} work inside {}
const Title = () => (
    <a href="/">
        <img className="logo"
            src="https://www.shutterstock.com/image-vector/logo-templates-monogrammed-elements-flourish-600w-1900512124.jpg" />
    </a>
)

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? <button onClick={() => { setIsLoggedIn(false) }}>Logout</button> :
                <button onClick={() => { setIsLoggedIn(true) }}>Login</button>}

        </div>
    )
}
export default Header;