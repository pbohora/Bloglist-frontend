import React from 'react'

import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import BlogpostForm from '../components/BlogpostForm'
import Togglable from '../components/Togglable'
import blogImage from '../Assests/addblog.png'

import Grid from '@material-ui/core/Grid'

const CreateBlogPage = ({
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
      <Section
        subTitle={'Create your passion, your way.'}
        description={'Create a unique and beautiful blog. It’s easy and free.'}
        background={true}
      >
        <Togglable buttonLabel='Add Blog'>
          <BlogpostForm
            onBlogSubmit={handleBlogSubmit}
            handleChange={handleChange}
            newBlog={newBlog}
          />
        </Togglable>
      </Section>
      <Section>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <h1>Know your audience</h1>
            <p>
              Find out which posts are a hit with Blogger’s built-in analytics.
              You’ll see where your audience is coming from and what they’re
              interested in. You can even connect your blog directly to Google
              Analytics for a more detailed look.
            </p>
          </Grid>
          <Grid item xs={6}>
            <img src={blogImage} alt='Smiley face' height='350' width='500' />
          </Grid>
        </Grid>
      </Section>
    </Layout>
  )
}

export default CreateBlogPage
