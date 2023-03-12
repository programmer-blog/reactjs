import { useEffect, useState } from "react";

const useOnline = () => {
    /**
     * Clean the Even listner always - in Functional Components - Add a return Callback method
     */
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        }

        const handleOffline = () => {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

    }, [])

    return () => {
        window.removeEventListener("online", handleOnline)
        window.removeEventListener("offline", handleOffline)
    }

    return isOnline;
}

export default useOnline;