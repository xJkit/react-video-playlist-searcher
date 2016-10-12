import axios from 'axios'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = 'AIzaSyBFHrNMQPz0RfUVwQexthPUd3Hivk-8N8s'

export default function (searchTerm) {
  // var encodedTerm = encodeURIComponent(searchTerm)
  var params = {
    part: 'snippet',
    key: API_KEY,
    q: searchTerm,
    type: 'video',
    maxResults: 10
  };

  return axios.get(ROOT_URL, { params: params })
  .then( function(res) {
    return (res.data.items)
  })
  .catch( function(error) {
    console.error(error);
  })
}
