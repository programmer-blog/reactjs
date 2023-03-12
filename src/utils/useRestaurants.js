import { useEffect, useState } from "react";
import { ALL_RESTAURANTS } from "../constants";

const useRestaurants = (resId) => {
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            ALL_RESTAURANTS
        );
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    if (!allRestaurants) return null; //Early Return (Not Render Component)

    return [allRestaurants, filteredRestaurants]
}

export default useRestaurants;