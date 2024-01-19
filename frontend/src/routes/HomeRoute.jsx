import { React, useState } from "react";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  clickHandler,
  favoriteArray,
  likePhotoHandler,
  topicClickHandler,
  seeFavPics,
  modeToggler,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favoriteArray={favoriteArray}
        topicClickHandler={topicClickHandler}
        seeFavPics={seeFavPics}
        modeToggler={modeToggler}
      />
      <PhotoList
        photos={photos}
        likePhotoHandler={likePhotoHandler}
        favoriteArray={favoriteArray}
        clickHandler={clickHandler}
      />
    </div>
  );
};

export default HomeRoute;
