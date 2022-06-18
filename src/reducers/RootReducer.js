import { combineReducers } from "redux"
import {
  saveMessageReducer,
  getSavedMessagesReducer,
  AddEmojiReducer,
} from "./TextReducer"

const initialState = {
  initialEmojiList: { emojiList: { "::happy::": "😃", ":sad::": "😞" } },
  saveMessage: {},
  getSavedMessages: { getMessages: [] },
}
const rootReducers = combineReducers({
  initialEmojiList: AddEmojiReducer,
  saveMessage: saveMessageReducer,
  getSavedMessages: getSavedMessagesReducer,
})

export { initialState }
export default rootReducers
