import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { editPost } from './postsSlice';

const EditPost = ({ id, title, body, onSave }) => {
  const [ newtitle, setNewTitle ] = useState(title);
  const [ newbody, setNewBody ] = useState(body);
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value)
  }

  const handleBodyChange = (e) => {
    setNewBody(e.target.value)
  }

  const handleSave = () => {
    dispatch(editPost({title: newtitle, body: newbody, id}));
    onSave()
  }


  return (
    <Form>
        <Form.Control 
            as="textarea" 
            rows={2}
            size="md" 
            type="text" 
            value={newtitle} 
            onChange={handleTitleChange}
        />
        <Form.Control 
            as="textarea" 
            rows={8}
            size="md" 
            type="text" 
            value={newbody} 
            onChange={handleBodyChange}
        />
        <Button variant="primary" onClick={handleSave}>Save</Button>
    </Form>
  )
}

export default EditPost