
import sinon from 'sinon'
import runSaga from 'redux-saga'
import * as api from '../api'
import { fetchPosts } from './postsSagas'

test('fetchPosts', async assert => {
  const dispatched = []
  console.log(api);
  sinon.stub(api, 'apiGetPosts').callsFake(() => (new Promise.resolve({
    json: () => new Promise.resolve({
      some: 'value',
    }),
  })))
  const result = await runSaga(
    {
      dispatch: action => dispatched.push(action),
      getState: () => ({ state: 'test' }),
    },
    fetchPosts,
  ).toPromise()

  assert.true(apiGetPosts.calledOnce())
  console.log(dispatched);
})
