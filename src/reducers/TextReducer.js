import {
  ADD_EMOJI_FAIL,
  ADD_EMOJI_REQUEST,
  ADD_EMOJI_SUCCESS,
  SAVE_MESSAGE_FAIL,
  SAVE_MESSAGE_REQUEST,
  SAVE_MESSAGE_SUCCESS,
  SHOW_ALL_TEXT_FAIL,
  SHOW_ALL_TEXT_REQUEST,
  SHOW_ALL_TEXT_SUCCESS,
} from "../constants/TextConstants"

const saveMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_MESSAGE_REQUEST:
      return { ...state, loading: true }
    case SAVE_MESSAGE_SUCCESS:
      return { ...state, loading: false, success: true }
    case SAVE_MESSAGE_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
const getSavedMessagesReducer = (state = { getMessages: [] }, action) => {
  switch (action.type) {
    case SHOW_ALL_TEXT_REQUEST:
      return { ...state, loading: true }
    case SHOW_ALL_TEXT_SUCCESS:
      return { ...state, loading: false, getMessages: action.payload }
    case SHOW_ALL_TEXT_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
const AddEmojiReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EMOJI_REQUEST:
      return { ...state, loading: true }
    case ADD_EMOJI_SUCCESS:
      var { emojiKey, emoji } = action.payload

      localStorage.setItem("::" + emojiKey + "::", emoji)
      return {
        ...state,
        loading: false,
        succes: true,
      }
    case ADD_EMOJI_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export { getSavedMessagesReducer, saveMessageReducer, AddEmojiReducer }
