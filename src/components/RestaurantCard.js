import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) =>{
    console.log(props.resData)
    const {name, costForTwo, cuisines, veg, avgRating, cloudinaryImageId,areaName, sla } = props.resData
    return (
            <div className="res-card">
                <div className="img-container">
                    <img className="res-logo" alt="restaurants Logo" src={CDN_URL + cloudinaryImageId} />
                </div>
                <h3 className="res-name">{name}</h3>
                <div className="res-metaData">
                    <span>{avgRating} *</span>
                    <span> {sla.deliveryTime} Mins</span>
                    <span>{veg ? "🟢" : "🔴"} </span>
                </div>
                <div>
                    {cuisines.join(" ")}
                </div>
                <div>
                    {costForTwo}
                </div>
                <div>
                    {areaName}
                </div>
            </div>
    )
}
export default RestaurantCard;