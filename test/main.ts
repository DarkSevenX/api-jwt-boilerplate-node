import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
})

const login = async (username: string, password: string) => {
  try {
    const body = { username, password }
    const response = await api.post('/auth/login', body)
    const userObj = response.data.user
    console.log(userObj);
    console.log(response.headers['token'])
    console.log(response.status)
  } catch (error) {
    console.log('error en login', error)
  }
}

login('sora', '123')
