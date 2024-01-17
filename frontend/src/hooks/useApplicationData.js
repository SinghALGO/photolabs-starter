import { React, useState } from "react";
import topics from "../mocks/topics";
import photos from "../mocks/photos";
const useApplicationData = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [photoData, setPhotoData] = useState("");
  const toggleModal = (photo) => {
    let data;
    if (photo) {
      data = photos.filter((photoEle) => photoEle.id === photo.id);
    }
    setPhotoData(data);
    setModalStatus((prev) => !prev);
  };
  const [likePhotoArray, setLikePhotoArray] = useState([]);
  const likePhotoHandler = (photoId) => {
    const isPhotoAlreadyLiked = likePhotoArray.includes(photoId);
    const newLikedArray = isPhotoAlreadyLiked
      ? likePhotoArray.filter((photo) => photo !== photoId)
      : [...likePhotoArray, photoId];
    setLikePhotoArray(newLikedArray);
  };

  return {
    state: { modalStatus, photoData, likePhotoArray },
    likePhotoHandler,
    toggleModal,
  };
};
export default useApplicationData;
