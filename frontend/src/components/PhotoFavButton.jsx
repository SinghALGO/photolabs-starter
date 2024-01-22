import React, { useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ onLike, likeFlag }) {
  const likeHandler = () => {
    onLike();
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={likeHandler}>
        <FavIcon selected={likeFlag} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
