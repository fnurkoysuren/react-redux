import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../store/auth'

function Profile() {

  const { user } = useSelector(state => state.auth)
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  }

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user])

  return (<>
    <div style={{ background: "lightblue" }}>
      <h3>profile</h3>
      <button onClick={() => handleLogout()}>logout</button>
    </div>
  </>)
}

export default Profile