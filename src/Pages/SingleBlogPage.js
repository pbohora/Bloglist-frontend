import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { updateBlog, removeBlog } from '../reducers/blogReducer'

const useStyles = makeStyles((theme) => ({}))

const SingleBlogPage = ({ user, handleLogOut }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const blogsData = useSelector(({ blogs }) => {
    return blogs
  })
  const id = useParams().id
  const selectedBlog = blogsData.blogs.find((blog) => blog.id === id)
  console.log(selectedBlog)

  const handleLike = async (id) => {
    const blog = blogsData.blogs.find((blog) => blog.id === id)
    console.log(blog)
    const changedBlog = { ...blog, likes: blog.likes + 1 }
    dispatch(updateBlog(id, changedBlog))
  }

  const handleRemove = async (id) => {
    dispatch(removeBlog(id))
  }

  return (
    <Layout user={user} handleLogOut={handleLogOut}>
      {selectedBlog && (
        <Section sectionTitle={selectedBlog.title} background={true}>
          <h3>Author : {selectedBlog.author}</h3>
          <Typography variant='body3' component='p'>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like. This impressive paella is a perfect party
            dish and a fun meal to cook together with your guests. Add 1 cup of
            frozen peas along with the mussels, if you like. This impressive
            paella is a perfect party dish and a fun meal to cook together with
            your guests. Add 1 cup of frozen peas along with the mussels, if you
            like. This impressive paella is a perfect party dish and a fun meal
            to cook together with your guests. Add 1 cup of frozen peas along
            with the mussels, if you like. This impressive paella is a perfect
            party dish and a fun meal to cook together with your guests. Add 1
            cup of frozen peas along with the mussels, if you like. This
            impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the
            mussels, if you like.
          </Typography>
          <div>
            <IconButton
              id='like-button'
              data-testid='like-button'
              //   className={classes.likeIcon}
              aria-label='add to favorites'
              onClick={() => handleLike(id)}
            >
              <FavoriteIcon />
            </IconButton>
            {selectedBlog.likes} Likes
          </div>
          <h4>Added by {selectedBlog.user.name}</h4>
        </Section>
      )}
    </Layout>
  )
}

export default SingleBlogPage
