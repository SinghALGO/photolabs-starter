import { React, useState } from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
const App = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const toggleModal = () => {
    setModalStatus((prev) => !prev);
  };
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} clickHandler={toggleModal} />
      {modalStatus && <PhotoDetailsModal clickHandler={toggleModal} />}
    </div>
  );
};

export default App;
