import React from 'react'
import { withRouter } from 'react-router-dom'

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
    width: 120,
    '&:hover': {
      background: '#09aae0'
    }
  },
  resetButton: {
    marginLeft: 'auto'
  }
}))

const LoginForm = ({
  handleLogin,
  userName,
  passWord,
  handleClickShowPassword,
  showPassword,
  sucessMessage,
  history
}) => {
  const classes = useStyles()
  console.log('history', history)
  const onSubmit = event => {
    console.log(event)
    event.preventDefault()
    handleLogin(event)
    history.push('/blogs')
  }
  console.log('history2', history)
  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <>
      <Card className={classes.root}>
        <form onSubmit={onSubmit}>
          <CardContent>
            <div>
              <FormControl fullWidth className={classes.margin}>
                <Input
                  id='input-with-icon-adornment'
                  placeholder='User Name'
                  {...userName}
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
                  {...passWord}
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
              onClick={() => (userName.onClick(), passWord.onClick())}
            >
              Reset
            </Button>
            <Button
              className={classes.loginButton}
              size='large'
              variant='contained'
              type='submit'
            >
              Login
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  )
}

export default withRouter(LoginForm)
