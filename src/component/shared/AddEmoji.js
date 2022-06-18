import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addEmoji } from "../../action/Emoji"
import FormContainer from "./FormContainer"
import Loader from "./Loader"
import Message from "./Message"

const AddEmoji = () => {
  const [emojiKey, setEmojiKey] = useState("")
  const [emoji, setEmoji] = useState("")

  const dispatch = useDispatch()
  const { emojiList, loading, error } = useSelector(
    (state) => state.initialEmojiList
  )
  console.log(emojiList)
  console.log("emojiKey", emojiKey)

  const submitFormHandler = (e) => {
    e.preventDefault()
    setEmojiKey(["::", emojiKey, "::"].join(""))
    //console.log(Key, emoji)
    dispatch(addEmoji({ emojiKey, emoji }))
    setEmojiKey("")
    setEmoji("")
  }

  return (
    <FormContainer>
      <h2 className="my-5 ">Add Emoji</h2>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <Form onSubmit={submitFormHandler}>
        <Form.Group className="mb-4">
          <Form.Control
            required
            value={emojiKey}
            type="text"
            onChange={(e) => setEmojiKey(e.target.value)}
            placeholder="Enter Emoji Key...."
            style={{
              fontSize: "120%",
              width: "50%",
            }}
          />

          <Form.Control
            required
            value={emoji}
            type="text"
            onChange={(e) => setEmoji(e.target.value)}
            placeholder="Enter Your Emoji..."
            style={{
              fontSize: "120%",
              width: "50%",
            }}
            className="my-2"
          />
        </Form.Group>
        <Button type="submit">Add Emoji</Button>
      </Form>
    </FormContainer>
  )
}

export default AddEmoji
