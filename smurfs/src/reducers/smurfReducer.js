import { FETCH_SMURFS_SUCCESS, FETCH_SMURFS_START } from '../actions'

const initialState = {
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
    default:
      return state
  }
}

export default smurfReducer