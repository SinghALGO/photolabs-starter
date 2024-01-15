import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss";

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <PhotoFavButton />
    </div>
  );
};

export default TopNavigation;
