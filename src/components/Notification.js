import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'

const Notification = ({ message, severity }) => {
  return (
    message && (
      <Snackbar
        open='open'
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Alert variant='filled' severity={severity}>
          <AlertTitle>{severity}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    )
  )
}

export default Notification
