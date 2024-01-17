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
  console.log(similar_array);
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => clickHandler(undefined)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__image">
        <PhotoList
          photos={photoData}
          likePhotoHandler={likePhotoHandler}
          favoriteArray={favoriteArray}
          clickHandler={clickHandler}
        />
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
