import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ onLike }) {
  const likeHandler = () => {
    setSelected((prevState) => !prevState);
    onLike();
  };
  const [selected, setSelected] = useState(false);
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={likeHandler}>
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
