import React from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
const App = () => {
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} />
      <PhotoDetailsModal />
    </div>
  );
};

export default App;
