import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import { Link, Redirect, withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    display: 'flex'
  },
  menuItem: {
    margin: '0 32px'
  },
  logo: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}))

export default function Navbar({ user, handleLogOut }) {
  const classes = useStyles()
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleLogOutAndClose = e => {
    handleLogOut(e)
    setAnchorEl(null)
  }
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='menu-appbar'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleLogOutAndClose}>Log out</MenuItem>
    </Menu>
  )

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='mobile-appbar'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div className={classes.title}>
        <Link to='/'>
          <MenuItem className={classes.menuItem} onClick={handleClose}>
            Home
          </MenuItem>
        </Link>

        <Link to='/blogs'>
          <MenuItem className={classes.menuItem} onClick={handleClose}>
            Blogs
          </MenuItem>
        </Link>
        {user && (
          <Link to='/addblog'>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              Add New Blog
            </MenuItem>
          </Link>
        )}
        <Link to='/about'>
          <MenuItem className={classes.menuItem} onClick={handleClose}>
            About
          </MenuItem>
        </Link>
      </div>
      {user ? (
        <div>
          <IconButton
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleMenu}
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
          {/* <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogOut}>Log out</MenuItem>
              </Menu> */}
        </div>
      ) : (
        <>
          <Link to='/login'>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              Sign up
            </MenuItem>
          </Link>
          <Link to='/login'>
            <MenuItem className={classes.menuItem}>Login</MenuItem>
          </Link>
        </>
      )}
      <IconButton
        edge='start'
        className={classes.menuButton}
        onClick={'handleMobileMenuOpen'}
        color='inherit'
        aria-label='open drawer'
      >
        <MenuIcon />
      </IconButton>
    </Menu>
  )

  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='inherit'>
        <Toolbar>
          <Typography variant='h4' className={classes.logo}>
            Blogs
          </Typography>
          <div className={classes.sectionDesktop}>
            <div className={classes.title}>
              <Link to='/'>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                  Home
                </MenuItem>
              </Link>

              <Link to='/blogs'>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                  Blogs
                </MenuItem>
              </Link>
              {user && (
                <Link to='/addblog'>
                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    Add New Blog
                  </MenuItem>
                </Link>
              )}
              <Link to='/about'>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                  About
                </MenuItem>
              </Link>
            </div>
            {user ? (
              <div>
                <IconButton
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
                {/* <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogOut}>Log out</MenuItem>
              </Menu> */}
              </div>
            ) : (
              <>
                <Link to='/login'>
                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    Sign up
                  </MenuItem>
                </Link>
                <Link to='/login'>
                  <MenuItem className={classes.menuItem}>Login</MenuItem>
                </Link>
              </>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              edge='start'
              className={classes.menuButton}
              onClick={handleMobileMenuOpen}
              color='inherit'
              aria-label='open drawer'
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}
