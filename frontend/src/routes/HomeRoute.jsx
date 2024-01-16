import { React, useState } from "react";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos }) => {
  const [likePhotoArray, setLikePhotoArray] = useState([]);

  const likePhotoHandler = (photoId) => {
    const likedIds = likePhotoArray.map((photo) => photo.id);
    const isPhotoAlreadyLiked = likedIds.includes(photoId);
    const newLikedArray = [];
    if (isPhotoAlreadyLiked) {
      newLikedArray = likePhotoArray.filter((photo) => photo.id != photoId);
    } else {
      newLikedArray = [...likePhotoArray, photos[photoId]];
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
