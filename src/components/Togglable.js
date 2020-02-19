import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import ClearIcon from '@material-ui/icons/Clear'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },

  cancelButton: {
    marginLeft: 'auto'
  },
  addButton: {
    alignSelf: 'center'
  }
}))

const Togglable = ({ children, buttonLabel }) => {
  const classes = useStyles()

  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <>
      <div className={classes.root}>
        <Button
          onClick={toggleVisibility}
          style={hideWhenVisible}
          size='large'
          variant='contained'
          color='primary'
          type='submit'
          className={classes.addButton}
        >
          {buttonLabel}
          <CreateIcon />
        </Button>
      </div>
      <div style={showWhenVisible}>
        <CardActions>
          <IconButton
            className={classes.cancelButton}
            onClick={toggleVisibility}
            color='secondary'
            aria-label='add an alarm'
            variant='contained'
          >
            <ClearIcon />
          </IconButton>
        </CardActions>
        {children}
      </div>
    </>
  )
}

export default Togglable
