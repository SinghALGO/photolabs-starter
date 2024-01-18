import { React } from "react";
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
  return (
    <div className="App">
      <HomeRoute
        topics={state.topics}
        photos={state.photos}
        clickHandler={toggleModal}
        favoriteArray={state.likePhotoArray}
        likePhotoHandler={likePhotoHandler}
        topicClickHandler={topicClickHandler}
        seeFavPics={seeFavPics}
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
