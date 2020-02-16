import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import LoginForm from '../components/LoginForm'

const LoginPage = ({
  user,
  userName,
  passWord,
  handleLogin,
  handleClickShowPassword,
  showPassword,
  sucessMessage,
  errorMessage,
  handleLogOut
}) => {
  return (
    <Layout
      user={user}
      handleLogOut={handleLogOut}
      sucessMessage={sucessMessage}
      errorMessage={errorMessage}
    >
      <Section sectionTitle='Login Form'>
        <LoginForm
          handleLogin={handleLogin}
          userName={userName}
          passWord={passWord}
          handleClickShowPassword={handleClickShowPassword}
          showPassword={showPassword}
        />
      </Section>
    </Layout>
  )
}

export default LoginPage
