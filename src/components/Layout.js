import React from 'react'

import Navbar from './Navbar'
import Notification from './Notification'

const Layout = ({
  user,
  handleLogOut,
  sucessMessage,
  errorMessage,
  children
}) => {
  return (
    <>
      <Navbar user={user} handleLogOut={handleLogOut} />
      <Notification message={sucessMessage} severity='success' />
      <Notification message={errorMessage} severity='error' />
      {children}
    </>
  )
}

export default Layout
