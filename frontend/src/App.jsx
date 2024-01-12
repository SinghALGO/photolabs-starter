import React from "react";
import PhotoFavButton from "./components/PhotoFavButton";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};
let photoArray = [];
for (let i = 0; i < 3; i++) {
  photoArray.push(
    <PhotoListItem
      key={i}
      photo={sampleDataForPhotoListItem}
      imageSource={sampleDataForPhotoListItem.imageSource}
    />
  );
}

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {photoArray}
      <PhotoFavButton />
    </div>
  );
};

export default App;
