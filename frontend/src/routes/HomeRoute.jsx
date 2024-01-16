import { React, useState } from "react";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos }) => {
  const [likePhotoArray, setLikePhotoArray] = useState([]);

  const likePhotoHandler = (photoId) => {
    const isPhotoAlreadyLiked = likePhotoArray.includes(photoId);
    const newLikedArray = isPhotoAlreadyLiked
      ? likePhotoArray.filter((photo) => photo != photoId)
      : [...likePhotoArray, photoId];
    setLikePhotoArray(newLikedArray);
  };
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoriteArray={likePhotoArray} />
      <PhotoList
        photos={photos}
        likePhotoHandler={likePhotoHandler}
        favoriteArray={likePhotoArray}
      />
    </div>
  );
};

export default HomeRoute;
