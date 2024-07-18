import axios from 'axios'

axios.defaults.baseURL = 'https://drf-api-projet-0f572d5cbd12.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export default axios
