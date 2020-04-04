import React from 'react'

import { useSelector } from 'react-redux'

import Navbar from './Navbar'
import Notification from './Notification'

const Layout = ({
  user,
  handleLogOut,
  sucessMessage,
  errorMessage,
  children,
}) => {
  const blogsData = useSelector(({ blogs }) => {
    return blogs
  })

  return (
    <>
      <Navbar user={user} handleLogOut={handleLogOut} />
      <Notification message={blogsData.sucess} severity='success' />
      <Notification message={blogsData.error} severity='error' />
      {children}
    </>
  )
}

export default Layout
