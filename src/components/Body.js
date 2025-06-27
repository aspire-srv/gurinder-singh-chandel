import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";

const Body = () => {
    return (
        <div> 
            <div className="search">Search</div>
            <div className="restaurants-container">
                {restaurants.map((res) =>{
                   return <RestaurantCard key = {res.info.id} resData = {res.info} />
                })}
                
            </div>
        </div>
    )
}

export default Body;