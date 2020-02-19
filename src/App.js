import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import BlogpostForm from './components/BlogpostForm'
import Togglable from './components/Togglable'
import { login } from './services/login'
import { getAll, create, update, remove, setToken } from './services/blog'
import { useField } from './hooks'

import LoginPage from './Pages/LoginPage'
import BlogPage from './Pages/BlogsPage'
import CreateBlogPage from './Pages/CreateBlogPage'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })
  const [sucessMessage, setSucessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const userName = useField('text')
  const passWord = useField(showPassword ? 'text' : 'password')

  const username = userName.value
  const password = passWord.value
  console.log(userName, passWord)
  useEffect(() => {
    getAll().then(returnedBlog => setBlogs(returnedBlog))
  }, [])
  useEffect(() => {
    getAll().then(returnedBlog => setBlogs(returnedBlog))
  }, [newBlog])

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedBLogUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
      setToken(user.token)
      console.log(user.token)
    }
  }, [])

  // const sucessStyle = {
  //   color: 'green',
  //   background: 'lightgrey',
  //   fontSize: '20',
  //   borderStyle: 'solid',
  //   borderRadius: '5',
  //   padding: '10',
  //   marginBottom: '10'
  // }

  // const errorStyle = {
  //   color: 'red',
  //   background: 'lightgrey',
  //   fontSize: '20',
  //   borderStyle: 'solid',
  //   borderRadius: '5',
  //   padding: '10',
  //   marginBottom: '10'
  // }

  const handleChange = e => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value })
    //console.log(newBlog)
  }
  const handleBlogSubmit = async e => {
    e.preventDefault()
    try {
      const returnBlog = await create(newBlog)

      setBlogs([...blogs, returnBlog])
      setSucessMessage(
        `A new blog ${newBlog.title} by ${newBlog.author} is created`
      )
      setTimeout(() => {
        setSucessMessage(null)
      }, 5000)
      setNewBlog({ title: '', author: '', url: '' })
    } catch (exception) {
      setErrorMessage('All inputs must be filled')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogin = async e => {
    e.preventDefault()

    try {
      const user = await login({ username, password })
      console.log(user)
      window.localStorage.setItem('loggedBLogUser', JSON.stringify(user))
      setToken(user.token)
      setUser(user)
    } catch (exception) {
      setErrorMessage('Wrong username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = e => {
    e.preventDefault()
    setUser(null)
    window.localStorage.clear()
  }

  const handleLike = async id => {
    try {
      const blog = blogs.find(blog => blog.id === id)
      console.log(blog)
      const changedBlog = { ...blog, likes: blog.likes + 1 }
      const updatedBlog = await update(id, changedBlog)
      console.log(updatedBlog)
      setBlogs(blogs.map(blog => (blog.id === id ? updatedBlog : blog)))
      //console.log(blogs)
    } catch (exception) {
      setErrorMessage('can not update')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleRemove = async (id, result) => {
    const blog = blogs.find(blog => blog.id === id)
    setOpenDialog(true)
    //const result = window.confirm(`Remove ${blog.title}! by ${blog.author}`)
    if (result) {
      try {
        await remove(id)

        setBlogs(blogs.filter(blog => blog.id !== id))
      } catch (exception) {
        setErrorMessage('Not authorized to remove')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleCancelDialog = () => {
    setOpenDialog(false)
  }

  return (
    <div>
      <Router>
        {/* {user === null ? (
          <LoginForm
            handleLogin={handleLogin}
            userName={userName}
            passWord={passWord}
            handleClickShowPassword={handleClickShowPassword}
            showPassword={showPassword}
          />
        ) : (
          <div>
            <p>{`logged in as ${user.name}`}</p>
            <button onClick={handleLogout}>log out</button>
            <Togglable buttonLabel='Add Blog'>
              <BlogpostForm
                onBlogSubmit={handleBlogSubmit}
                handleChange={handleChange}
                newBlog={newBlog}
              />
            </Togglable>
          </div>
        )} */}

        <Route
          path='/blogs'
          render={() => (
            <BlogPage
              blogs={blogs}
              handleLogOut={handleLogout}
              handleLike={handleLike}
              handleRemove={handleRemove}
              user={user}
              sucessMessage={sucessMessage}
              errorMessage={errorMessage}
              openDialog={openDialog}
              handleClose={handleCancelDialog}
            />
          )}
        />
        <Route
          path='/login'
          render={() => (
            <LoginPage
              user={user}
              handleLogOut={handleLogout}
              handleLogin={handleLogin}
              userName={userName}
              passWord={passWord}
              handleClickShowPassword={handleClickShowPassword}
              showPassword={showPassword}
              sucessMessage={sucessMessage}
              errorMessage={errorMessage}
            />
          )}
        />
        <Route
          path='/addblog'
          render={() => (
            <CreateBlogPage
              user={user}
              handleLogOut={handleLogout}
              sucessMessage={sucessMessage}
              errorMessage={errorMessage}
              handleBlogSubmit={handleBlogSubmit}
              handleChange={handleChange}
              newBlog
            />
          )}
        />
      </Router>
    </div>
  )
}

export default App
