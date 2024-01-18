import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./helperFunction";
const useApplicationData = () => {
  const initialState = {
    modalStatus: false,
    photoData: "",
    likePhotoArray: [],
    photos: [],
    topics: [],
    topicId: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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

  const toggleModal = (photo) => {
    let data;
    if (photo) {
      data = state.photos.filter((photoEle) => photoEle.id === photo.id);
    }
    dispatch({ type: "SET_MODAL_DATA", payload: data });
  };
  const topicClickHandler = (topicId) => {
    dispatch({ type: "SET_TOPIC_ID", payload: topicId });
  };

  const seeFavPics = () => {
    const favPicsArrayOfObjs = state.photos.filter((photoEle) =>
      state.likePhotoArray.includes(photoEle.id)
    );
    dispatch({ type: "ADD_PHOTO_DATA", payload: favPicsArrayOfObjs });
  };

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
