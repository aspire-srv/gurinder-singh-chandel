import { useState, useEffect } from "react";
import { MENU_ITEMS } from "../utils/constants";

const useRestaurantMenu = (resId, setFilteredList)  =>{

const [resMenu, setResMenu] = useState(null)

 useEffect(() => {
    fetchMenu();
  }, []);


    const fetchMenu = async () => {
        const data = await fetch(MENU_ITEMS + resId);
        const jsonData = await data.json();
    
        //console.log(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card);
        // Get all cards where card.card['@type'] is "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        const cards = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        const itemCategories = cards
          .filter(cardObj => cardObj.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
          .map(cardObj => ({
            itemCards: cardObj.card.card.itemCards,
            title: cardObj.card.card.title
          }));
    
        setResMenu(itemCategories);
        setFilteredList(itemCategories);
      };

      return resMenu;

};

export default useRestaurantMenu;
