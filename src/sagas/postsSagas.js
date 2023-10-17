import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../api'
import { setPosts, updateErrors } from '../posts/postsSlice'

// worker Saga: will be fired on GET_POSTS actions
export function* fetchPosts(action) {
  try {
    const posts = yield call(api.apiGetPosts)
    yield put(setPosts(posts))
  } catch (e) {
    yield put(updateErrors(e.message ))
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

function* postsSaga() {
  yield takeLatest('GET_POSTS', fetchPosts)
}

export default postsSaga