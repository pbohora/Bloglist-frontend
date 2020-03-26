// const Blog = ({ blog, handleLike, handleRemove, user }) => {
//   const [showDetail, setShowDetail] = useState(false)
//   const handleShowDetail = () => setShowDetail(!showDetail)

//   const blogStyle = {
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 2,
//     border: 'solid',
//     borderWidth: 1,
//     margin: 15
//   }

//   return (
//     <div style={blogStyle}>
//       <div onClick={handleShowDetail} className='header'>
//         {blog.title} {blog.author}
//       </div>
//       {showDetail && (
//         <div>
//           <div>
//             <a href=''>{blog.url}</a>
//           </div>
//           <div>
//             {blog.likes} likes
//             <button onClick={() => handleLike(blog.id)}>like</button>
//             <div>Added by {blog.user.name} </div>
//             {user !== null && user.id === blog.user.id && (
//               <button onClick={() => handleRemove(blog.id)}>remove</button>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DeleteIcon from '@material-ui/icons/Delete'

import DialogBox from '../DialogBox'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 270,
    maxWidth: 700,
    padding: 20,
    cursor: 'pointer',
    alignItems: 'center',
    margin: theme.spacing(4, 0),
    '&:hover': {}
  },
  likeIcon: {
    '&:hover': {
      color: 'blue'
    }
  },
  deleteIcon: {
    '&:hover': {
      color: 'red'
    }
  },
  addedby: {
    marginLeft: 'auto',
    padding: theme.spacing(0, 4)
  }
}))
const Blog = ({ blog, handleLike, handleRemove, user }) => {
  const [showDetail, setShowDetail] = useState(false)

  const [openDialog, setOpenDialog] = useState(false)

  const handleClose = () => setOpenDialog(false)

  const handleShowDetail = () => setShowDetail(!showDetail)
  const handleClick = () => {
    handleRemove(blog.id)
    handleClose()
  }

  const classes = useStyles()

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          onClick={handleShowDetail}
          className='header'
          title={blog.title}
          subheader={blog.author}
          //subheader='September 14, 2016'
        />
        {showDetail && (
          <>
            <CardContent>
              <Typography variant='body2' component='p'>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography color='textSecondary'>
                Link:
                <a href=''>{blog.url}</a>
              </Typography>
            </CardContent>
            <CardActions disableSpacing id='action'>
              <IconButton
                id='like-button'
                data-testid='like-button'
                className={classes.likeIcon}
                aria-label='add to favorites'
                onClick={() => handleLike(blog.id)}
              >
                <FavoriteIcon />
              </IconButton>
              {blog.likes} Likes
              {user !== null && user.id === blog.user.id && (
                <IconButton
                  id='delete-button'
                  className={classes.deleteIcon}
                  aria-label='delete'
                  onClick={() => setOpenDialog(true)}
                >
                  <DeleteIcon />
                </IconButton>
              )}
              <Typography
                className={classes.addedby}
                color='textSecondary'
                component='p'
              >
                Added by {blog.user.name}
              </Typography>
            </CardActions>
          </>
        )}
      </Card>
      <DialogBox
        openDialog={openDialog}
        handleClose={handleClose}
        handleClick={handleClick}
        blog={blog}
      />
    </>
  )
}
Blog.propTypes = {
  blog: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any),
  handleLike: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default Blog
