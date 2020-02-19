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
    padding: 60,
    alignSelf: 'center'
  },

  cancelButton: {
    marginLeft: 'auto'
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
    <Card className={classes.root}>
      <CardActions style={hideWhenVisible}>
        <Button
          onClick={toggleVisibility}
          size='large'
          variant='contained'
          color='primary'
          type='submit'
        >
          {buttonLabel}
          <CreateIcon />
        </Button>
      </CardActions>
      <CardContent style={showWhenVisible}>
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
      </CardContent>
    </Card>
  )
}

export default Togglable
