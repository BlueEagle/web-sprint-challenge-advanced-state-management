import { FETCH_SMURFS_SUCCESS, FETCH_SMURFS_START, FETCH_SMURFS_ERROR, POST_SMURFS_START, POST_SMURFS_SUCCESS, POST_SMURFS_ERROR } from '../actions'

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
      }
    case FETCH_SMURFS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: `Error fetching smurfs data: ${action.payload}`
      }
    case POST_SMURFS_START:
      return {
        ...state,
        isPosting: true
      }
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        smurfData: action.payload,
        isPosting: false,
        error: null
      }
    case POST_SMURFS_ERROR:
      return {
        ...state,
        isPosting: false,
        error: `Error posting smurfs data: ${action.payload}`
      }
    default:
      return state
  }
}

export default smurfReducer