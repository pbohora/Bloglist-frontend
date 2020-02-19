import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 60,
    background: 'white'
  },
  createButton: {
    marginLeft: 'auto'
  },

  margin: {
    margin: theme.spacing(4, 0)
  }
}))
const BlogpostForm = ({ onBlogSubmit, handleChange, newBlog }) => {
  const classes = useStyles()
  return (
    <form className={classes.root} onSubmit={onBlogSubmit}>
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

export default BlogpostForm
