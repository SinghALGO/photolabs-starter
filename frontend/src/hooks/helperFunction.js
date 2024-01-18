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
    case "SET_TOPIC_ID":
      return {
        ...state,
        topicId: action.payload,
      };
    case "TOGGLE_LIKE_PHOTO":
      const isPhotoAlreadyLiked = state.likePhotoArray.includes(action.payload);
      const newLikedArray = isPhotoAlreadyLiked
        ? state.likePhotoArray.filter((photo) => photo !== action.payload)
        : [...state.likePhotoArray, action.payload];
      console.log(newLikedArray);
      return { ...state, likePhotoArray: newLikedArray };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
export default reducer;
