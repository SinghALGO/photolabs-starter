import { React, useState } from "react";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos }) => {
  const [likePhotoArray, setLikePhotoArray] = useState([]);

  const likePhotoHandler = (photoId) => {
    const isPhotoAlreadyLiked = likePhotoArray.includes(photoId);
    const newLikedArray = [];
    if (isPhotoAlreadyLiked) {
      newLikedArray = likePhotoArray.filter((photo) => photo != photoId);
    } else {
      newLikedArray = [...likePhotoArray, photoId];
    }
    setLikePhotoArray(newLikedArray);
  };
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} likePhotoHandler={likePhotoHandler} />
    </div>
  );
};

export default HomeRoute;
