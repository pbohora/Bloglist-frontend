import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8),
    justifyContent: 'center'
  }
}))
const Notification = ({ message, severity }) => {
  const classes = useStyles()
  return (
    message && (
      <Alert variant='filled' className={classes.root} severity={severity}>
        <AlertTitle>{severity}</AlertTitle>
        {message}
      </Alert>
    )
  )
}

export default Notification
