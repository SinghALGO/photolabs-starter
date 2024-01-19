import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./helperFunction";
const useApplicationData = () => {
  //Initial state defined here
  const initialState = {
    modalStatus: false,
    photoData: "",
    likePhotoArray: [],
    photos: [],
    topics: [],
    topicId: "",
  };
  //reducer function has been imported from a separate file
  const [state, dispatch] = useReducer(reducer, initialState);
  //useEffect runs on initial render to get photo data from api and then dispatch to the reducer function to change photos state
  useEffect(() => {
    axios
      .get("/api/photos")
      .then((response) => {
        dispatch({ type: "ADD_PHOTO_DATA", payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  //useEffect runs when topicId state changes. It checks it topicId state is defined and is not null,empty or undefined, this way it wont run on intial render.
  useEffect(() => {
    if (state.topicId) {
      axios
        .get(`/api/topics/photos/${state.topicId}`)
        .then((response) => {
          dispatch({ type: "ADD_PHOTO_DATA", payload: response.data });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [state.topicId]);
  //useEffect to get topic data from api and runs on initial render
  useEffect(() => {
    axios
      .get("/api/topics")
      .then((response) => {
        dispatch({ type: "ADD_TOPIC_DATA", payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  //function to set photodata that is sent to modal and toggle modal state.
  const toggleModal = (photo) => {
    let data;
    //checking if photo argument is non empty as no argument is sent to toggleModal function when modal is closed.
    if (photo) {
      data = state.photos.filter((photoEle) => photoEle.id === photo.id);
    }
    dispatch({ type: "SET_MODAL_DATA", payload: data });
  };
  //function to handle topic being clicked in the navigation bar
  const topicClickHandler = (topicId) => {
    dispatch({ type: "SET_TOPIC_ID", payload: topicId });
  };
  // function to handle when user clicks on heart in navigation bar
  const seeFavPics = () => {
    //a new array containing only photos which have been liked is made
    const favPicsArrayOfObjs = state.photos.filter((photoEle) =>
      state.likePhotoArray.includes(photoEle.id)
    );
    dispatch({ type: "ADD_PHOTO_DATA", payload: favPicsArrayOfObjs });
  };
  //function to handle user liking a photo
  const likePhotoHandler = (photoId) => {
    dispatch({ type: "TOGGLE_LIKE_PHOTO", payload: photoId });
  };

  return {
    state,
    likePhotoHandler,
    toggleModal,
    topicClickHandler,
    seeFavPics,
  };
};
export default useApplicationData;
