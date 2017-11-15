import axios from 'axios';
export const GET_CANDIDATE_INFO = 'getCandidateInfo'
export const GET_ERROR_INFO = 'getErrorInfo'

axios.defaults.baseURL = 'http://franco-sfdb.herokuapp.com/candidates'


export function getCandidateInfo(value) {
  return function(dispatch) {
    axios.get(`/${value}`)
      .then(response => {
        dispatch({ type: GET_CANDIDATE_INFO, payload:response })
      })
      .catch(response => {
        dispatch({ type: GET_ERROR_INFO, payload:'Candidate ID Not Found' })
      })
  }
}
