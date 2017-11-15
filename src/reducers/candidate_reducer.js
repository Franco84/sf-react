import {GET_CANDIDATE_INFO,GET_ERROR_INFO} from '../actions/index'

export default (state={}, action) => {
  switch (action.type) {
    case GET_CANDIDATE_INFO:
      return { ...state, error: null, info: action.payload.data}
    case GET_ERROR_INFO:
      return { ...state, error: action.payload, info: null}
    default:
      return state
  }
}
