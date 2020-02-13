import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import BlogList from '../components/BLogs/BlogList'

const LoginPage = ({ user, blogs, handleLike, handleRemove }) => {
  return (
    <Layout user={user}>
      <Section sectionTitle='Blogs'>
        <BlogList
          blogs={blogs}
          handleLike={handleLike}
          handleRemove={handleRemove}
          user={user}
        />
      </Section>
    </Layout>
  )
}

export default LoginPage
