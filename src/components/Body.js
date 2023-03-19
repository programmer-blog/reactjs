import { useEffect, useState } from "react";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurants from "../utils/useRestaurants";
import useOnline from "../utils/useOnline";
const Body = () => {

    // const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    // let [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [allRestaurants, filteredRestaurants] = useRestaurants();

    const isOnline = useOnline();

    // const [getLocalStorage, setLocalStorage] = useLocalStorage();

    if (!isOnline) {
        return <h1>Offline,  Please check you internet connection</h1>
    }
    //if (!allRestaurants) return null; //Early Return (Not Render Component)

    if (filteredRestaurants.length == 0) return <h1>No restaurant match your search</h1>
    return (allRestaurants.length === 0) ?
        <Shimmer /> :
        (
            <>
                <div className="search-container p-5 bg-pink-50 my-5">
                    <input type="text" className="focus:bg-green-200" placeholder="search" value={searchText}
                        onChange=
                        {(e) => {
                            setSearchText(e.target.value)
                        }} />
                    <button className="p-2 m-2 bg-green-900 hover:bg-gray-500 text-white rounded-lg" onClick={() => {
                        //filter the data
                        //update the state of restaureant list
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}>Search</button>
                </div>
                <div className="flex flex-wrap">
                    {
                        (filteredRestaurants.length) ?
                            filteredRestaurants.map((restaurant) => {
                                return (
                                    <Link key={restaurant.data.id} to={"restaurant/" + restaurant.data.id}>
                                        <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
                                    </Link>
                                )
                            }) : <h1>No record found</h1>
                    }
                </div>
            </>
        )
}

export default Body;