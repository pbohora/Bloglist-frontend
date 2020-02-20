import React from 'react'
import { withRouter } from 'react-router-dom'

import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import blogImage from '../Assests/addblog.png'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  signin: {
    alignSelf: 'center',
    width: '160px',
    padding: '10px 40px',
    background: 'rgb(243, 116, 31)',
    '&:hover': {
      background: 'rgb(243, 116, 31)'
    }
  }
}))

const HomePage = ({
  user,
  handleLogOut,
  sucessMessage,
  errorMessage,
  history
}) => {
  const classes = useStyles()

  const onSubmit = event => {
    event.preventDefault()
    history.push('/signup')
  }

  return (
    <Layout
      user={user}
      handleLogOut={handleLogOut}
      sucessMessage={sucessMessage}
      errorMessage={errorMessage}
    >
      <Section
        subTitle={'A new platform to create your blog for free .'}
        description={
          'Create a unique and beautiful blog. It’s easy and free. Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google for free.'
        }
        background
      >
        {!user && (
          <Button
            onClick={onSubmit}
            size='large'
            variant='contained'
            type='submit'
            className={classes.signin}
          >
            Sign in
          </Button>
        )}
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

export default withRouter(HomePage)
