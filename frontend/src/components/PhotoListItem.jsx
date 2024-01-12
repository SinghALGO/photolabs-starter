import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ sampleDataForPhotoListItem }) => {
  return (
    <section className="photoList">
      <img src={sampleDataForPhotoListItem.imageSource}></img>
      <img src={sampleDataForPhotoListItem.profile}></img>
      <h3>{sampleDataForPhotoListItem.username}</h3>
      <h3>
        {sampleDataForPhotoListItem.location.city},
        {sampleDataForPhotoListItem.location.country}
      </h3>
    </section>
  );
};

export default PhotoListItem;
