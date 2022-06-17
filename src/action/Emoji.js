import backendAPI from '../api/TextToEmojiApi'
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
} from '../constants/TextConstants'

const saveMessage = (Message) => async (dispatch) => {
  try {
    dispatch({ type: SAVE_MESSAGE_REQUEST })
    console.log(Message)

    const { data } = await backendAPI.post('/addText', { Message })
    dispatch({ type: SAVE_MESSAGE_SUCCESS, payload: data })
  } catch (err) {
    const error = err.response ? err.response : err.response.data.message
    dispatch({ type: SAVE_MESSAGE_FAIL })
  }
}

const getSavedMessages = () => async (dispatch) => {
  try {
    dispatch({ type: SHOW_ALL_TEXT_REQUEST })
    const { data } = await backendAPI.get('/getMessages')
    dispatch({ type: SHOW_ALL_TEXT_SUCCESS, payload: data['messages'] })
  } catch (err) {
    const error = err.response ? err.response : err.response.data.message
    dispatch({ type: SHOW_ALL_TEXT_FAIL, payload: err })
  }
}

const addEmoji = (data) => async (dispatch) => {
  try {
    console.log('data', data)
    dispatch({ type: ADD_EMOJI_REQUEST })
    dispatch({ type: ADD_EMOJI_SUCCESS, payload: data })
  } catch (err) {
    const error = "Emoji Can't be Added"
    dispatch({ type: ADD_EMOJI_FAIL, payload: error })
  }
}
export { saveMessage, getSavedMessages, addEmoji }
