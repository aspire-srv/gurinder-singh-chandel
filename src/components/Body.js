import RestaurantCard from "./RestaurantCard";
import Category from "./Categories";
import { restaurants, categories } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import Searchbox from "./Searchbox";
import useRestaurantData from "../utils/useRestaurantData"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const {listOfRestaurants, listOfOptions, filteredList, setFilteredList, fetchData} = useRestaurantData();

  //conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  if(onlineStatus === false){
    return (
      <div className="offline-status">
      <h2>You are currently offline</h2>
      <p>Please check your internet connection.</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h3 className="category-heading">What's on your mind?</h3>
        <div className="category-container">
          {listOfOptions.map((category) => (
            <Category key={category.id} catData={category} />
          ))}
        </div>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="filters">
        <button
          onClick={() => {
            let filterdList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredList(filterdList);
          }}
          className="fiter-btn"
        >
          Top Rated Restaurant
        </button>
        <button
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.info.veg === true
            );
            setFilteredList(filterdList);
          }}
          className="fiter-btn"
        >
          Veg
        </button>
        <button
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.info.veg !== true
            );
            setFilteredList(filterdList);
          }}
          className="fiter-btn"
        >
          Non-Veg
        </button>
        <button
          onClick={() => {
            fetchData();
          }}
          className="fiter-btn"
        >
          Clear Filter
        </button>
        <Searchbox
          listOfRestaurants={listOfRestaurants}
          setFilteredList={setFilteredList}
          setSearchText={setSearchText}
          searchText = {searchText}
        />
      </div>
      <div className="restaurants-container">
        {filteredList.map((res) => {
          return (
            <Link className="link" key={res.info.id} to={`restaurant/${res.info.id}`}>
              <RestaurantCard resData={res.info} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
