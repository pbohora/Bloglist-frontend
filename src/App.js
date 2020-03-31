import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { initializeBlogs } from './reducers/blogReducer'
import { useDispatch } from 'react-redux'

import { login } from './services/login'
import { setToken } from './services/blog'
import { useField } from './hooks'

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import BlogPage from './Pages/BlogsPage'
import CreateBlogPage from './Pages/CreateBlogPage'

const App = () => {
  const [user, setUser] = useState(null)
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })
  const [sucessMessage, setSucessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  const userName = useField('text')
  const passWord = useField(showPassword ? 'text' : 'password')

  console.log(user)
  const username = userName.value
  const password = passWord.value
  console.log(userName, passWord)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedBLogUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
      setToken(user.token)
      console.log(user.token)
    }
  }, [])

  const handleChange = e => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value })
    //console.log(newBlog)
  }
  // const handleBlogSubmit = async e => {
  //   e.preventDefault()
  //   try {
  //     const returnBlog = await create(newBlog)

  //     setBlogs([...blogs, returnBlog])
  //     setSucessMessage(
  //       `A new blog ${newBlog.title} by ${newBlog.author} is created`
  //     )
  //     setNewBlog({ title: '', author: '', url: '' })
  //     setTimeout(() => {
  //       setSucessMessage(null)
  //     }, 5000)
  //   } catch (exception) {
  //     setErrorMessage('All inputs must be filled')
  //     setTimeout(() => {
  //       setErrorMessage(null)
  //     }, 5000)
  //   }
  // }

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

  // const handleLike = async id => {
  //   try {
  //     const blog = blogs.find(blog => blog.id === id)
  //     console.log(blog)
  //     const changedBlog = { ...blog, likes: blog.likes + 1 }
  //     const updatedBlog = await update(id, changedBlog)
  //     console.log(updatedBlog)
  //     setBlogs(blogs.map(blog => (blog.id === id ? updatedBlog : blog)))
  //     //console.log(blogs)
  //   } catch (exception) {
  //     setErrorMessage('can not update')
  //     setTimeout(() => {
  //       setErrorMessage(null)
  //     }, 5000)
  //   }
  // }

  // const handleRemove = async id => {
  //   const blog = blogs.find(blog => blog.id === id)
  //   //const result = window.confirm(`Remove ${blog.title}! by ${blog.author}`)

  //   try {
  //     await remove(id)

  //     setBlogs(blogs.filter(blog => blog.id !== id))
  //     setSucessMessage(`Deteted ${blog.title} by ${blog.author}`)

  //     setTimeout(() => {
  //       setSucessMessage(null)
  //     }, 5000)
  //   } catch (exception) {
  //     setErrorMessage('Not authorized to remove')
  //     setTimeout(() => {
  //       setErrorMessage(null)
  //     }, 5000)
  //   }
  // }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <Router>
        <Route
          exact
          path='/'
          render={() => (
            <HomePage
              handleLogOut={handleLogout}
              user={user}
              sucessMessage={sucessMessage}
              errorMessage={errorMessage}
            />
          )}
        />
        <Route
          path='/blogs'
          render={() => (
            <BlogPage
              handleLogOut={handleLogout}
              user={user}
              sucessMessage={sucessMessage}
              errorMessage={errorMessage}
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
          path='/signup'
          render={() => (
            <SignupPage
              user={user}
              handleLogOut={handleLogout}
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
