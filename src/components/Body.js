import { useEffect, useState } from "react";
import { restrauntList } from "../constants";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    // When you need to create a local variable in REACT, you need to use the 
    // state variable created useState variable
    // Hook is a normal function // normal functions developed by Facebook variables
    // every hook has a specific function for it
    //useState function is used to create State Variables
    //it comes from React libraray, we import it using named variable
    //useState funciton returns an array- first element of  this array is variable name //
    // When state changes - react re-renders whole component

    //Avoidn rendering  component
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState(""); // this is local StateVariable
    //useEffect is a webhook that take two paramas -> 1. call back function, dependency array
    //it will notbe called immediately but when ever useeffect wanted to be called, react make sure that is calles it at a specific time
    //That specific timeis whenever our component renders
    //There are two time when a compent rerenders -> either a state changes or props changes
    //if we dont want to call it after every re renders-> we use a dependency array
    //The first argument -> callback array is called after every rerender
    // if we dont wat then we give a depenedycy arr
    //Supose wae want to call on =ly when searhcTextchanges
    //Now thos useeffectis dependent on search text
    //Called when dependency is changed
    //if passed [] then it will be called once
    //Called once and after initial render like with []
    //if dependency array [searchText] passed then => once initial render then every time after re render when the search text changes  
    //Conditional rendering
    //Shimmer UI or DATa UI
    //If reastaurnt UI has no data load shimmer UI
    //If Restaurant has data then load actual data UI
    //Evenrythin in UI is a compnenet
    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    function filterData(searchText, restaurants) {
        return restaurants.filter((restaurant) =>
            restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase()))
    }

    if (!allRestaurants) return null; //Early Return (Not Render Component)

    // if(filteredRestaurants.length ==0) return <h1>No restaurant match your search</h1>
    return (allRestaurants.length === 0) ?
        <Shimmer /> :
        (
            <>
                <div className="search-container">
                    <input type="text" className="search" placeholder="search" value={searchText}
                        onChange=
                        {(e) => {
                            setSearchText(e.target.value)
                        }} />
                    <button className="search-btn" onClick={() => {
                        //filter the data
                        //update the state of restaureant list
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}>Search</button>
                </div>
                <div className="restaurant-list">
                    {
                        (filteredRestaurants.length) ?
                            filteredRestaurants.map((restaurant) => {
                                return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
                            }) : <h1>No record found</h1>
                    }
                </div>
            </>
        )
}

export default Body;