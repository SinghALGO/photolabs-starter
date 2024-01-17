import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  clickHandler,
  photoData,
  likePhotoHandler,
  favoriteArray,
}) => {
  const similar_array = Object.values(photoData[0].similar_photos);
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => clickHandler(undefined)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <img
        src={photoData[0].urls.full}
        alt="selected photo"
        className="photo-details-modal__image"
      />
      <div className="photo-details-modal__photographer-details">
        <img src={photoData[0].user.profile} alt="photographer profile" />
        <div className="photo-details-modal__photographer-info">
          {photoData[0].user.name}
          <div className="photo-details-modal__photographer-location">
            {photoData[0].location.city}, {photoData[0].location.country}
          </div>
        </div>
      </div>

      <h1 className="photo-details-modal__header">Similar Photos</h1>
      <PhotoList
        photos={similar_array}
        likePhotoHandler={likePhotoHandler}
        favoriteArray={favoriteArray}
        clickHandler={clickHandler}
      />
    </div>
  );
};

export default PhotoDetailsModal;
