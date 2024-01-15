import React from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";

// let photoArray = [];
// for (let i = 0; i < 3; i++) {
//   photoArray.push(
//     <PhotoListItem
//       key={i}
//       photo={sampleDataForPhotoListItem}
//       imageSource={sampleDataForPhotoListItem.imageSource}
//     />
//   );
// }

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
