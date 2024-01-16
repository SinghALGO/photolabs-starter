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
    setPhotoData(photo);
    setModalStatus((prev) => !prev);
  };
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} clickHandler={toggleModal} />
      {modalStatus && (
        <PhotoDetailsModal clickHandler={toggleModal} photoData={photoData} />
      )}
    </div>
  );
};

export default App;
