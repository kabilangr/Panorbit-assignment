import React from 'react'
import { IS_USER_LOGGED_IN } from '../../utils/Constant'

export const Home = () => {
  const logout = () => {
    window.sessionStorage.removeItem(IS_USER_LOGGED_IN)
  }
  return (
    <div onClick={logout}>Home</div>
  )
}
