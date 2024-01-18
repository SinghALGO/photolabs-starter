import { useReducer, useEffect } from "react";
import axios from "axios";
const useApplicationData = () => {
  const initialState = {
    modalStatus: false,
    photoData: "",
    likePhotoArray: [],
    photos: [],
    topics: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_MODAL_DATA":
        return {
          ...state,
          photoData: action.payload,
          modalStatus: !state.modalStatus,
        };
      case "ADD_PHOTO_DATA":
        return {
          ...state,
          photos: action.payload,
        };
      case "ADD_TOPIC_DATA":
        return {
          ...state,
          topics: action.payload,
        };
      case "TOGGLE_LIKE_PHOTO":
        const isPhotoAlreadyLiked = state.likePhotoArray.includes(
          action.payload
        );
        const newLikedArray = isPhotoAlreadyLiked
          ? state.likePhotoArray.filter((photo) => photo !== action.payload)
          : [...state.likePhotoArray, action.payload];
        return { ...state, likePhotoArray: newLikedArray };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
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

  const likePhotoHandler = (photoId) => {
    dispatch({ type: "TOGGLE_LIKE_PHOTO", payload: photoId });
  };

  return {
    state,
    likePhotoHandler,
    toggleModal,
  };
};
export default useApplicationData;
