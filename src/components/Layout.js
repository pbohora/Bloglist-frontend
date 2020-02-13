import React from 'react'

import Navbar from './Navbar'

const Layout = ({ user, handleLogout, children }) => {
  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      {children}
    </>
  )
}

export default Layout
