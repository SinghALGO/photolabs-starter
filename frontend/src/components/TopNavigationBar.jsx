import React from "react";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ topics, favoriteArray }) => {
  const doesFavExist = favoriteArray.length > 0;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={doesFavExist} />
    </div>
  );
};

export default TopNavigation;
