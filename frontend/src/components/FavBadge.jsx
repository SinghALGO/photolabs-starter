import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist, seeFavPics }) => {
  return (
    <div className="fav-badge" onClick={seeFavPics}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
    </div>
  );
};

export default FavBadge;
