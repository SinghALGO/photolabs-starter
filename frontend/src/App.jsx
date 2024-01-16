import { React, useState } from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
const App = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const clickHandler = () => {
    setModalStatus((prev) => !prev);
  };
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} clickHandler={clickHandler} />
      {modalStatus && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
