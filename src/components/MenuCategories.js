import React from "react";
import { MEDIA_ASSET } from "../utils/constants";

const MenuCategories = (props) => {
  const { itemCards, title } = props.item;
  // console.log(props.item.card.info);
  return (
    <>
      <div className="">
         <h2 className="menu-title">{title} ({itemCards.length})</h2>
        {itemCards.map((item) => {
          // console.log(item);
          return (
            <div className="item-container" key={item.card.info.id}>
              <div>
                <img
                  className="item-img"
                  src={MEDIA_ASSET + item.card.info.imageId}
                />
              </div>
             <div className="item-details">
                <h2>{item.card.info.name}</h2>
                <span>
                  Rs-
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100}/-
                </span>
                <p>{item.card.info.ratings?.aggregatedRating?.rating}({item.card.info.ratings?.aggregatedRating?.ratingCount})</p>
                <p>{item.card.info.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuCategories;
