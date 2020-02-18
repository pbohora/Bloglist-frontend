import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import BlogList from '../components/BLogs/BlogList'

const BlogPage = ({
  user,
  blogs,
  handleLike,
  handleRemove,
  sucessMessage,
  errorMessage,
  handleLogOut,
  openDialog,
  handleClose
}) => {
  return (
    <Layout
      user={user}
      handleLogOut={handleLogOut}
      sucessMessage={sucessMessage}
      errorMessage={errorMessage}
    >
      <Section sectionTitle='Blogs'>
        <BlogList
          blogs={blogs}
          handleLike={handleLike}
          handleRemove={handleRemove}
          user={user}
          openDialog={openDialog}
          handleClose={handleClose}
        />
      </Section>
    </Layout>
  )
}

export default BlogPage
