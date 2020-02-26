import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import SignupForm from '../components/SignupForm'

const SignupPage = ({
  user,
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
      <Section sectionTitle='Signup Form'>
        <SignupForm
          handleClickShowPassword={handleClickShowPassword}
          showPassword={showPassword}
        />
      </Section>
    </Layout>
  )
}

export default SignupPage
