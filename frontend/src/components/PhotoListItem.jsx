import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ sampleDataForPhotoListItem }) => {
  return (
    <section className="photo-list___item">
      <img
        className="photo-list__image"
        src={sampleDataForPhotoListItem.imageSource}
      ></img>
      <img
        className="photo-list__user-profile"
        src={sampleDataForPhotoListItem.profile}
      ></img>
      <div className="photo-list__user-details">
        <p className="photo-list__user-info">
          {sampleDataForPhotoListItem.username}
        </p>
        <p className="photo-list__user-info photo-list__user-location">
          {sampleDataForPhotoListItem.location.city},
          {sampleDataForPhotoListItem.location.country}
        </p>
      </div>
    </section>
  );
};

export default PhotoListItem;
