import React from 'react'
import { withRouter } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import CardActions from '@material-ui/core/CardActions'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 60,
    background: 'white'
  },
  createButton: {
    marginLeft: 'auto',
    background: 'rgb(243, 116, 31)',
    '&:hover': {
      background: 'rgb(243, 116, 31)'
    }
  },

  margin: {
    margin: theme.spacing(4, 0)
  }
}))
const BlogpostForm = ({ onBlogSubmit, handleChange, newBlog, history }) => {
  const classes = useStyles()

  const onSubmit = event => {
    console.log('history', history)
    event.preventDefault()
    onBlogSubmit(event)
    history.push('/blogs')
  }
  console.log('history22', history)

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <label>TITLE</label>

      <FormControl fullWidth className={classes.margin}>
        <TextField
          type='text'
          value={newBlog.title}
          name='title'
          onChange={handleChange}
          id='outlined-basic'
          label='Blog Title'
          variant='outlined'
        />
      </FormControl>
      <label>AUTHOR</label>

      <FormControl fullWidth className={classes.margin}>
        <TextField
          type='text'
          value={newBlog.author}
          name='author'
          onChange={handleChange}
          id='outlined-basic'
          label='Author'
          variant='outlined'
        />
      </FormControl>
      <label>URL</label>

      <FormControl fullWidth className={classes.margin}>
        <TextField
          type='text'
          value={newBlog.url}
          name='url'
          onChange={handleChange}
          id='outlined-basic'
          label='Blog URL'
          variant='outlined'
        />
      </FormControl>

      <CardActions>
        <Button
          className={classes.createButton}
          size='large'
          variant='contained'
          color='primary'
          type='submit'
        >
          Create
        </Button>
      </CardActions>
    </form>
  )
}

export default withRouter(BlogpostForm)
