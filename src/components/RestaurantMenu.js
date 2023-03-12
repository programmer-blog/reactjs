import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { id } = useParams();

    const restaurant = useRestaurant(id);

    return (!restaurant) ? <Shimmer /> : (
        <div className="menu">
            <div>
                <h1>Restraunt id: {restaurant.id}</h1>
                <h1>Restraunt Name: {restaurant.name}</h1>
                <h3>Area: {restaurant.area}</h3>
                <h3>City: {restaurant.city}</h3>
                <h3>Rating: {restaurant.avgRating}</h3>
                <h3>costForTwo: {restaurant.costForTwoMsg}</h3>
                <img width="300px" src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default RestaurantMenu;