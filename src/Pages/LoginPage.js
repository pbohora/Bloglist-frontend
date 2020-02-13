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
  showPassword
}) => {
  return (
    <Layout user={user}>
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