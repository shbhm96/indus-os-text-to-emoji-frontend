import { combineReducers } from 'redux'
import {
  saveMessageReducer,
  getSavedMessagesReducer,
  AddEmojiReducer,
} from './TextReducer'

const initialState = {
  emojiList: { '::happy::': '😃', '::sad::': '😞' },
  saveMessage: {},
  getSavedMessages: { getMessages: [] },
}
const rootReducers = combineReducers({
  emojiList: AddEmojiReducer,
  saveMessage: saveMessageReducer,
  getSavedMessages: getSavedMessagesReducer,
})

export { initialState }
export default rootReducers
