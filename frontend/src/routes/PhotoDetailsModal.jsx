import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({
  clickHandler,
  photoData,
  likePhotoHandler,
  favoriteArray,
  darkMode,
}) => {
  const similar_array = Object.values(photoData[0].similar_photos);
  const likeFlag = favoriteArray.includes(photoData[0].id);
  const onLike = () => {
    likePhotoHandler(photoData[0].id);
  };

  return (
    <div
      className={darkMode ? "photo-details-modal" : "photo-details-modal-dark"}
    >
      <button
        className="photo-details-modal__close-button"
        onClick={() => clickHandler(undefined)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton onLike={onLike} likeFlag={likeFlag} />
        <img
          src={photoData[0].urls.full}
          alt="selected photo"
          className="photo-details-modal__image"
        />
        <div className="photo-details-modal__top-bar">
          <img
            src={photoData[0].user.profile}
            alt="photographer profile"
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            {photoData[0].user.name}
            <div className="photo-details-modal__photographer-location">
              {photoData[0].location.city}, {photoData[0].location.country}
            </div>
          </div>
        </div>

        <p className="photo-details-modal__header">Similar Photos</p>
        <PhotoList
          photos={similar_array}
          likePhotoHandler={likePhotoHandler}
          favoriteArray={favoriteArray}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
