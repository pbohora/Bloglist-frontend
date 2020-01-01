import React from 'react'

const LoginForm = ({
  handleLogin,
  userName,
  passWord,
  userReset,
  passwordReset
}) => (
  <>
    <form onSubmit={handleLogin}>
      <label>Username</label>
      <input {...userName} />
      <label>Password</label>
      <input {...passWord} />

      <button type='submit'>Login</button>
    </form>
    <button onClick={() => (userReset(), passwordReset())}>Reset</button>
  </>
)

export default LoginForm
