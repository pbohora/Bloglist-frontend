import React from 'react'
import { withRouter } from 'react-router-dom'

import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import Subsection from '../components/Subsection/Subsection'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  signin: {
    alignSelf: 'center',
    width: '160px',
    padding: '10px 40px',
    background: 'rgb(243, 116, 31)',
    '&:hover': {
      background: 'rgb(243, 116, 31)',
    },
  },
}))

const HomePage = ({
  user,
  handleLogOut,
  sucessMessage,
  errorMessage,
  history,
}) => {
  const classes = useStyles()

  const onSubmit = (event) => {
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
            Sign up
          </Button>
        )}
      </Section>
      <Section>
        <Subsection />
      </Section>
    </Layout>
  )
}

export default withRouter(HomePage)
