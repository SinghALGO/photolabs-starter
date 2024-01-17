import { React, useState } from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
const App = () => {
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

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        clickHandler={toggleModal}
        favoriteArray={likePhotoArray}
        likePhotoHandler={likePhotoHandler}
      />
      {modalStatus && (
        <PhotoDetailsModal
          clickHandler={toggleModal}
          photoData={photoData}
          likePhotoHandler={likePhotoHandler}
          favoriteArray={likePhotoArray}
        />
      )}
    </div>
  );
};

export default App;
