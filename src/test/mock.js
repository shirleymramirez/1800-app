import configureStore from 'redux-mock-store' 

const middlewares = []
export const mockStore = configureStore(middlewares)

export const initialState = {
    ids: [],
    data: {}
}




