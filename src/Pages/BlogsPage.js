import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import BlogList from '../components/BLogs/BlogList'

const BlogPage = ({ user, blogs, handleLike, handleRemove, handleLogOut }) => {
  return (
    <Layout user={user} handleLogOut={handleLogOut}>
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

export default BlogPage
