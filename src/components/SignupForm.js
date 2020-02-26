import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { Link, Redirect, withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 60,
    alignSelf: 'center'
  },

  margin: {
    margin: theme.spacing(4, 0)
  },

  loginButton: {
    background: '#45d0ff',
    color: 'white',
    maxWidth: 110,
    '&:hover': {
      background: '#09aae0'
    }
  },
  resetButton: {
    marginLeft: 'auto'
  }
}))

const SignupForm = ({ handleClickShowPassword, showPassword }) => {
  const classes = useStyles()

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <>
      <Card className={classes.root}>
        <form>
          <CardContent>
            <div>
              <FormControl fullWidth className={classes.margin}>
                <Input
                  id='standard-adornment-password'
                  placeholder='Full Name'
                />
              </FormControl>
            </div>

            <div>
              <FormControl fullWidth className={classes.margin}>
                <Input
                  id='input-with-icon-adornment'
                  placeholder='User Name'
                  endAdornment={
                    <InputAdornment position='start'>
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <div>
              <FormControl fullWidth className={classes.margin}>
                <Input
                  id='standard-adornment-password'
                  placeholder='Password'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div>
              <FormControl fullWidth className={classes.margin}>
                <Input
                  id='standard-adornment-password'
                  placeholder='Conform Password'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          </CardContent>

          <CardActions>
            <Button
              className={classes.resetButton}
              size='large'
              variant='contained'
              color='secondary'
            >
              Cancel
            </Button>
            <Button
              className={classes.loginButton}
              size='large'
              variant='contained'
              type='submit'
            >
              Sign up
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  )
}

export default SignupForm
