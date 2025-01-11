import axios from 'axios'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext/AuthContext'

export const axiosSecure = axios.create({
  baseURL: 'https://b10-a11-milescape-server.vercel.app',
  withCredentials: true,
})

const useAxiosSecure = () => {
  const navigate = useNavigate()
  const { handleSignOut } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res
      },
      async error => {
        
        if (error.response.status === 401 || error.response.status === 403) {
          // logout
          handleSignOut()
          // navigate to login
          navigate('/login')
        }
      }
    )
  }, [handleSignOut, navigate])
  return axiosSecure
}

export default useAxiosSecure;