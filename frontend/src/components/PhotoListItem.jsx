import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photo,
  imageSource,
  likePhotoHandler,
  favoriteArray,
  clickHandler,
}) => {
  const onLike = () => {
    likePhotoHandler(photo.id);
  };
  const onPhotoClick = () => {
    clickHandler(photo);
  };

  const likeFlag = favoriteArray.includes(photo.id);
  return (
    <section className="photo-list__item">
      <PhotoFavButton onLike={onLike} likeFlag={likeFlag} />
      <img
        className="photo-list__image"
        src={imageSource}
        onClick={onPhotoClick}
      ></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.profile}></img>
        <div>
          <p className="photo-list__user-info">{photo.username}</p>
          <p className="photo-list__user-info photo-list__user-location">
            {photo.location.city},{photo.location.country}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
