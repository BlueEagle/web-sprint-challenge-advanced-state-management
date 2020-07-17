import { FETCH_SMURFS_SUCCESS, FETCH_SMURFS_START, POST_SMURFS_START, POST_SMURFS_SUCCESS } from '../actions'

const initialState = {
  isPosting: false,
  isLoading: false,
  smurfData: null,
  error: null
}

const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS_START:
      console.log('Starting to fetch data...')
      return {
        ...state,
        isLoading: true
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfData: action.payload,
        isLoading: false,
        error: null
      } // do error too!
    case POST_SMURFS_START:
      return {
        ...state,
        isPosting: true
      }
    case POST_SMURFS_SUCCESS:
      console.log(`Post success! ${action.payload}`)
      return {
        ...state,
        smurfData: action.payload,
        isPosting: false,
        error: null
      }
    default:
      return state
  }
}

export default smurfReducer