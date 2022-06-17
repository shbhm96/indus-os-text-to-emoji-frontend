import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import FormContainer from './shared/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { saveMessage } from '../action/Emoji'

const TextToEmoji = (props) => {
  const [addedEmojiText, setAddedEmojiText] = useState()
  const [text, setText] = useState()
  const dispatch = useDispatch()
  const emojiList = useSelector((state) => state.emojiList)

  const addEmojiHandler = (text) => {
    const textAddEmoji = text
      .toString()
      .split(' ')
      .map((word) => {
        if (
          word.substring(0, 2) === '::' &&
          word.substring(word.length - 2, word.length) === '::' &&
          word.length > 2
        ) {
          return emojiList[word] + ' '
        } else {
          return word + ' '
        }
      })
    setAddedEmojiText(textAddEmoji)
  }
  const submitFormHandler = (e) => {
    e.preventDefault()
    dispatch(saveMessage(addedEmojiText.join(' ')))
    setAddedEmojiText()
    setText()
  }

  return (
    <FormContainer>
      <Form onSubmit={submitFormHandler}>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            value={text}
            onChange={(e) => addEmojiHandler(e.target.value)}
            placeholder='Enter your Message....'
            style={{
              fontSize: '200%',
              width: '110%',
              marginTop: '20%',
            }}
          />
        </Form.Group>
        <Form.Group className='mb-6'>
          <Form.Label>
            <h4> &nbsp; {addedEmojiText}</h4>
          </Form.Label>
        </Form.Group>
        <Form.Group className='mb-6'>
          <Button className='py-3 w-100' type='submit'>
            Save Message
          </Button>
        </Form.Group>
      </Form>
    </FormContainer>
  )
}

export default TextToEmoji
