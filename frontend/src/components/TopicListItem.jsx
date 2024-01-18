import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topicData, topicClickHandler }) => {
  const clickHandler = () => {
    topicClickHandler(topicData.id);
  };
  return (
    <div className="topic-list__item" onClick={clickHandler}>
      <span>{topicData.title}</span>
    </div>
  );
};

export default TopicListItem;
