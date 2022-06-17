import React, { useEffect } from 'react'
import { ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getSavedMessages } from '../action/Emoji'
import FormContainer from './shared/FormContainer'
import Loader from './shared/Loader'
import Message from './shared/Message'

const ShowMessages = () => {
  const dispatch = useDispatch()

  const { getMessages, error, loading } = useSelector(
    (state) => state.getSavedMessages
  )

  useEffect(() => {
    dispatch(getSavedMessages())
  }, [])
  return (
    <FormContainer>
      <h2 className='py-5'>Saved Messages</h2>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      <ul variant='flush'>
        {getMessages &&
          getMessages.length > 0 &&
          getMessages.map((message, key) => {
            return (
              <li
                key={key}
                style={{
                  fontSize: '120%',
                  width: '50%',
                  fontWeight: 'bold',
                  marginTop: '20px',
                }}
              >
                {message['Message']}
              </li>
            )
          })}
      </ul>
    </FormContainer>
  )
}

export default ShowMessages
