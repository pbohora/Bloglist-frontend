import React from 'react'

const Notification = ({ message, style }) =>
  message && <p style={style}>{message}</p>

export default Notification
