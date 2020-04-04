import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import Users from '../components/Users'

const UsersPage = ({ user, handleLogOut }) => {
  return (
    <Layout user={user} handleLogOut={handleLogOut}>
      <Section sectionTitle='Users Page' background={true}>
        <Users />
      </Section>
    </Layout>
  )
}

export default UsersPage
