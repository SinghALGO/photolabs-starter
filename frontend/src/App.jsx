import { React, useState } from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import useApplicationData from "./hooks/useApplicationData";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
const App = () => {
  const {
    state,
    likePhotoHandler,
    toggleModal,
    topicClickHandler,
    seeFavPics,
  } = useApplicationData();
  const [dark, setDark] = useState("false");
  //function to set state of dark depending on the arguement to the function
  const modeToggler = (mode) => {
    setDark(mode === "Light" ? false : true);
  };
  return (
    <div className={dark ? "App" : "App-dark"}>
      <HomeRoute
        topics={state.topics}
        photos={state.photos}
        clickHandler={toggleModal}
        favoriteArray={state.likePhotoArray}
        likePhotoHandler={likePhotoHandler}
        topicClickHandler={topicClickHandler}
        seeFavPics={seeFavPics}
        modeToggler={modeToggler}
      />
      {state.modalStatus && (
        <PhotoDetailsModal
          darkMode={dark}
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
