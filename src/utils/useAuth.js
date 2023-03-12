import { useState } from "react"

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return isLoggedIn;
};


export default useAuth;
