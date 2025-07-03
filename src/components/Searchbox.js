import { useState } from "react";

const Searchbox = (props) =>{
    const {searchText, listOfRestaurants, setSearchText, setFilteredList, isMenuSearch} = props;


    return (
        <div>
          <input placeholder="search here" onChange={(e)=>{
              setSearchText(e.target.value);
          }} value={searchText}></input>
          <button onClick={()=>{
            //console.log(listOfRestaurants)

              let filterdList;
              if (!isMenuSearch) {
                filterdList = listOfRestaurants.filter(res =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
              } else {
                // Assuming listOfRestaurants is an array of objects with 'title' and 'itemCards' in the same order
                filterdList = listOfRestaurants
                  .map(section => {
                    const filteredCards = (section.itemCards || []).filter(card =>
                      card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    return filteredCards.length > 0
                      ? { title: section.title, itemCards: filteredCards }
                      : null;
                  })
                  .filter(section => section !== null);
              }
              //console.log(filterdList);
              setFilteredList(filterdList);
          }}>Search</button>
        </div>
    )
}

export default Searchbox;