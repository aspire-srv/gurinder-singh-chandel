import { useState, useEffect } from "react";
import MenuCategories from "./MenuCategories";
import Shimmer from "./Shimmer";
import { useParams } from "react-router"
import  useRestaurantMenu  from "../utils/useRestaurantMenu";
import Searchbox from "./Searchbox";


const RestaurantMenu = () => {
 const {resId} = useParams() 
 const [filteredList, setFilteredList] = useState([]);
 const resMenu = useRestaurantMenu(resId,setFilteredList)
const [searchText, setSearchText] = useState("");


if(resMenu === null){
    return <Shimmer />
}


// ...

// useEffect(() => {
//   if (resMenu && resMenu.length > 0) {
//     setFilteredList(resMenu);
//   }
// }, [resMenu]);

  return (
    <div>
      <div className="item-conatiner">
        <Searchbox
          listOfRestaurants={resMenu}
          setFilteredList={setFilteredList}
          setSearchText={setSearchText}
          searchText = {searchText}
          isMenuSearch = {true}
        />
        {filteredList.map((item, idx)=>{
           // console.log(item)
           return <MenuCategories key={idx} item={item} />
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
