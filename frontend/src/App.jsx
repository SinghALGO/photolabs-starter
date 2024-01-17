import { React, useState } from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import useApplicationData from "./hooks/useApplicationData";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
const App = () => {
  const { state, likePhotoHandler, toggleModal } = useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        clickHandler={toggleModal}
        favoriteArray={state.likePhotoArray}
        likePhotoHandler={likePhotoHandler}
      />
      {state.modalStatus && (
        <PhotoDetailsModal
          clickHandler={toggleModal}
          photoData={state.photoData}
          likePhotoHandler={likePhotoHandler}
          favoriteArray={state.likePhotoArray}
        />
      )}
    </div>
  );
};

export default App;
