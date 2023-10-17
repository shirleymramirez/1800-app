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
      <Form.Control 
        id="searchField"
        type="text" 
        placeholder="Search title..." 
        onChange={searchItems}
      />
      <div className="d-flex flex-row flex-wrap justify-content-center" >
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