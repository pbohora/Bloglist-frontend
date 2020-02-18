import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const DialogBox = ({ openDialog, handleClick, handleClose }) => {
  return (
    <div>
      <Dialog
        open={openDialog}
        keepMounted
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>
          {'Delete the blog?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Are you sure ? you want to delete the blog
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClick} color='secondary'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogBox
