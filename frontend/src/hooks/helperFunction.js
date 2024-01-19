//Reucer function has been moved to separate file to improve readability
const reducer = (state, action) => {
  switch (action.type) {
    //This case will send photo data to modal and toggle modal status(true or false)
    case "SET_MODAL_DATA":
      return {
        ...state,
        photoData: action.payload,
        modalStatus: !state.modalStatus,
      };
    //This case adds photo data to the state after getting it from API and also after getting topic specific data
    case "ADD_PHOTO_DATA":
      return {
        ...state,
        photos: action.payload,
      };
    //This case adds topic data to the state
    case "ADD_TOPIC_DATA":
      return {
        ...state,
        topics: action.payload,
      };
    //This case sets state for the topicId
    case "SET_TOPIC_ID":
      return {
        ...state,
        topicId: action.payload,
      };
    //This case is for when a photo is liked and the likePhotoArray state is updated before checking if this photo is already liked or not
    case "TOGGLE_LIKE_PHOTO":
      //Checking if the photo is already liked
      const isPhotoAlreadyLiked = state.likePhotoArray.includes(action.payload);
      //If it is already liked, then remove it from else add it
      const newLikedArray = isPhotoAlreadyLiked
        ? state.likePhotoArray.filter((photo) => photo !== action.payload)
        : [...state.likePhotoArray, action.payload];
      return { ...state, likePhotoArray: newLikedArray };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
export default reducer;
