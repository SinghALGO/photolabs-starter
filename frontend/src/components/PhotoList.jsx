import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, likePhotoHandler, favoriteArray }) => {
  const photoArray = photos.map((photo) => {
    const { user, location, urls, id } = photo;
    const photoObj = {
      id,
      profile: user.profile,
      username: user.username,
      location: { city: location.city, country: location.country },
    };
    return (
      <PhotoListItem
        key={id}
        imageSource={urls.regular}
        photo={photoObj}
        likePhotoHandler={likePhotoHandler}
        favoriteArray={favoriteArray}
      />
    );
  });

  return <ul className="photo-list">{photoArray}</ul>;
};

export default PhotoList;
