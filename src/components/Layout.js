import React from 'react'

import Navbar from './Navbar'

const Layout = ({ user, handleLogOut, children }) => {
  return (
    <>
      <Navbar user={user} handleLogOut={handleLogOut} />
      {children}
    </>
  )
}

export default Layout
