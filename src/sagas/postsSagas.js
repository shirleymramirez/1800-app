import { call, put, takeLatest } from 'redux-saga/effects'
import apiGetPosts from '../api'
import { setPosts, updateErrors } from '../posts/postsSlice'

// worker Saga: will be fired on GET_POSTS actions
function* fetchPosts(action) {
  try {
    const posts = yield call(apiGetPosts)
    yield put(setPosts(posts))
  } catch (e) {
    yield put(updateErrors(e.message ))
  }
}

/*
  Starts fetchPosts on each dispatched `GET_POSTS` action.
  Allows concurrent fetches of posts.
*/
function* postsSaga() {
  yield takeLatest('GET_POSTS', fetchPosts)
}

export default postsSaga