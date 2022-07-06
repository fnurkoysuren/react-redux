import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/auth'
import { useNavigate } from 'react-router-dom'

function Login() {

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleLogin = () => {

    const damyData = {
      id: 1,
      username: 'dummy',
      password: 'dummy'
    }
    
    dispatch(login(damyData));
    navigate('/');
  }
  return (
    <div style={{ background: "lightblue" }}>
      <h3>Login</h3>
      <button onClick={handleLogin}>login</button>
    </div>
  )
}

export default Login