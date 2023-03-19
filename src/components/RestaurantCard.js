import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/userContext";

const RestrauntCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
    const { user } = useContext(UserContext)
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img
                src={
                    IMG_CDN_URL + cloudinaryImageId
                }
            />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} Minutes</h4>
            <h3 className="font-bold">{user.name}</h3>
        </div>
    )
}

export default RestrauntCard;