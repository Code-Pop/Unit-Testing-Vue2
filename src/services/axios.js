import axios from 'axios'

export function getReviews() {
  return axios.get('http://localhost:3000/reiews').then(response => {
    return response.data
  })
}
