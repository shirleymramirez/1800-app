import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import postsReducer from '../posts/postsSlice'
import postsSaga from '../sagas/postsSagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Mount it on the Store
export default configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// then run the saga
sagaMiddleware.run(postsSaga)


