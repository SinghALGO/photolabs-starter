import React, { useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ onLike, likeFlag }) {
  const [selected, setSelected] = useState(likeFlag);
  const likeHandler = () => {
    setSelected((prevState) => !prevState);
    onLike();
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={likeHandler}>
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
