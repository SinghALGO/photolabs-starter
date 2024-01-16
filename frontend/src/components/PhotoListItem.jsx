import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, imageSource, likePhotoHandler }) => {
  const onLike = () => {
    likePhotoHandler(photo.id);
  };
  return (
    <section className="photo-list__item">
      <PhotoFavButton onLike={onLike} />
      <img className="photo-list__image" src={imageSource}></img>
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
