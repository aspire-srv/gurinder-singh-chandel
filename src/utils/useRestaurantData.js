import { useState, useEffect } from "react";

const useRestaurantData = () =>{
      const [listOfRestaurants, setListOfRestaurants] = useState([]);
      const [filteredList, setFilteredList] = useState([]);
      const [listOfOptions, setlistOfOptions] = useState([]);
    
      useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1662566&lng=72.8525696&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
          );
          const jsonData = await data.json();
          setListOfRestaurants(
            jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setFilteredList(
            jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setlistOfOptions(jsonData?.data?.cards[0]?.card.card.imageGridCards.info);
          // console.log()
        } catch (error) {
          console.log(error);
        }
      };

      return {listOfRestaurants,filteredList,listOfOptions,setFilteredList, fetchData}
}

export default useRestaurantData;