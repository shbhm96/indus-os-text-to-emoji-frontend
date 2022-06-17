import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addEmoji } from '../../action/Emoji'
import FormContainer from './FormContainer'

const AddEmoji = () => {
  const [Key, setKey] = useState('')
  const [emoji, setEmoji] = useState('')

  const dispatch = useDispatch()
  const emojiList = useSelector((state) => state.emojiList)
  console.log(emojiList)

  const submitFormHandler = (e) => {
    //console.log(Key, emoji)
    e.preventDefault()
    //setKey(['::', Key, '::'].join(''))
    //console.log(Key, emoji)
    dispatch(addEmoji({ Key, emoji }))
    setKey('')
    setEmoji('')
  }

  return (
    <FormContainer>
      <h2 className='my-5 '>Add Emoji</h2>
      <Form onSubmit={submitFormHandler}>
        <Form.Group className='mb-4'>
          <Form.Control
            type='text'
            placeholder='Enter Emoji Key....'
            onChange={(e) => setKey(e.target.value)}
            style={{
              fontSize: '120%',
              width: '50%',
            }}
            value={Key}
            required
          />

          <Form.Control
            required
            value={emoji}
            type='text'
            onChange={(e) => setEmoji(e.target.value)}
            placeholder='Enter Your Emoji...'
            style={{
              fontSize: '120%',
              width: '50%',
            }}
            className='my-4'
          />
        </Form.Group>
        <Button type='submit'>Add Emoji</Button>
      </Form>
    </FormContainer>
  )
}

export default AddEmoji
