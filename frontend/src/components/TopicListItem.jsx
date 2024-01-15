import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topicData }) => {
  return (
    <div className="topic-list__item">
      <span>{topicData.title}</span>
    </div>
  );
};

export default TopicListItem;
