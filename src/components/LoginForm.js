import React from 'react'

const LoginForm = ({ handleLogin, userName, passWord }) => (
  <>
    <form onSubmit={handleLogin}>
      <label>Username</label>
      <input {...userName} />
      <label>Password</label>
      <input {...passWord} />

      <button type='submit'>Login</button>
    </form>
    <button onClick={() => (userName.onClick(), passWord.onClick())}>
      Reset
    </button>
  </>
)

export default LoginForm
