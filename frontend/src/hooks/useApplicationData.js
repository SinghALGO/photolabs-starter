import { useReducer } from "react";
import photos from "../mocks/photos";
const useApplicationData = () => {
  const initialState = {
    modalStatus: false,
    photoData: "",
    likePhotoArray: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_MODAL":
        return { ...state, modalStatus: !state.modalStatus };
      case "SET_MODAL_DATA":
        return { ...state, photoData: action.payload };
      case "TOGGLE_LIKE_PHOTO":
        const isPhotoAlreadyLiked = state.likePhotoArray.includes(
          action.payload
        );
        const newLikedArray = isPhotoAlreadyLiked
          ? state.likePhotoArray.filter((photo) => photo !== action.payload)
          : [...state.likePhotoArray, action.payload];
        return { ...state, likePhotoArray: newLikedArray };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = (photo) => {
    let data;
    if (photo) {
      data = photos.filter((photoEle) => photoEle.id === photo.id);
    }
    dispatch({ type: "SET_MODAL_DATA", payload: data });
    dispatch({ type: "TOGGLE_MODAL" });
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
