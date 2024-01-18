import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, topicClickHandler }) => {
  const topicArray = topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        topicData={topic}
        topicClickHandler={topicClickHandler}
      />
    );
  });
  return <div className="top-nav-bar__topic-list">{topicArray}</div>;
};

export default TopicList;
