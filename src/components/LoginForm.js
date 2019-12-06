import React from 'react'

const LoginForm = ({
  handleLogin,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
}) => (
  <form onSubmit={handleLogin}>
    <label>Username</label>
    <input
      type='text'
      name='username'
      value={username}
      onChange={handleUsernameChange}
    />
    <label>Password</label>
    <input
      type='password'
      name='password'
      value={password}
      onChange={handlePasswordChange}
    />

    <button type='submit'>Login</button>
  </form>
)

export default LoginForm
