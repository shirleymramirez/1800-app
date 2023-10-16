import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Post from './Post';

const Posts = () => {
    const postIds = useSelector(state => state.posts.ids)
    const posts = useSelector(state => state.posts.data)
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        dispatch({type: 'GET_POSTS' })
    },[dispatch]);

    const searchItems = (e) => {
      setSearchText(e.target.value);
    }

  return (
    <div style={{ padding: 50 }}>
      <Form.Control style={{ display: 'flex', justifyContent: 'center', margin: 'auto', width: '50rem'}}
        type="text" 
        placeholder="Search..." 
        onChange={searchItems}
      />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        { postIds.filter((postId) => {
            return posts[postId].title.toLowerCase().includes(searchText.toLowerCase());
          }).map((postId) => {
            return (
              <Post 
                key = {posts[postId].id}
                title= {posts[postId].title} 
                body= {posts[postId].body }
                id={postId}
            />
            )
          })
        }
      </div>
    </div>
  );
}

export default Posts;