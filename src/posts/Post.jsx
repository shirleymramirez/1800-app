import React, { useState } from 'react'
import ViewPosts from './ViewPosts';
import EditPost from './EditPost';
import Card from 'react-bootstrap/Card'

const Post = ({ id, title, body }) => {
  const [ toggleEdit, setToggleEdit ] = useState(false);

  const handleEdit = () => {
    setToggleEdit(!toggleEdit);
  }

  return (
    <Card id="cardStyle">
      {toggleEdit ? 
        <EditPost 
          id={id}
          title={title}
          body={body}
          onSave={handleEdit}
        />
        :
        <ViewPosts 
          id={id}
          title={title}
          body={body}
          onEdit={handleEdit}
        /> 
        }
    </Card>
  )
}

export default Post