import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import BlogpostForm from '../components/BlogpostForm'
import Togglable from '../components/Togglable'

const CreateBlogForm = ({
  user,
  handleLogOut,
  sucessMessage,
  errorMessage,
  handleBlogSubmit,
  handleChange,
  newBlog
}) => {
  return (
    <Layout
      user={user}
      handleLogOut={handleLogOut}
      sucessMessage={sucessMessage}
      errorMessage={errorMessage}
    >
      <Section sectionTitle='Blogs'>
        <Togglable buttonLabel='Add Blog'>
          <BlogpostForm
            onBlogSubmit={handleBlogSubmit}
            handleChange={handleChange}
            newBlog={newBlog}
          />
        </Togglable>
      </Section>
    </Layout>
  )
}

export default CreateBlogForm
