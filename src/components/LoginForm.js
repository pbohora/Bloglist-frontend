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

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  margin: {
    margin: theme.spacing(2)
  }
}))

const LoginForm = ({ handleLogin, userName, passWord }) => {
  const classes = useStyles()

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <FormControl className={classes.margin}>
            <Input
              id='input-with-icon-adornment'
              placeholder='User Name'
              startAdornment={
                <InputAdornment position='end'>
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <Input
              id='standard-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              placeholder='Password'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button color='primary' type='submit'>
            Login
          </Button>
        </CardContent>
      </Card>
      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input {...userName} />
        <label>Password</label>
        <input {...passWord} />

        <button type='submit'>Login</button>
      </form>
      <button onClick={() => (userName.onClick(), passWord.onClick())}>
        Reset
      </button>
    </>
  )
}

export default LoginForm
