import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import BlogList from './components/BLogs/BlogList'
import BlogpostForm from './components/BlogpostForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { login } from './services/login'
import { getAll, create, update, remove, setToken } from './services/blog'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })
  const [sucessMessage, setSucessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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

  const sucessStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20',
    borderStyle: 'solid',
    borderRadius: '5',
    padding: '10',
    marginBottom: '10'
  }

  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20',
    borderStyle: 'solid',
    borderRadius: '5',
    padding: '10',
    marginBottom: '10'
  }

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

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleLogin = async e => {
    e.preventDefault()

    try {
      const user = await login({ username, password })

      window.localStorage.setItem('loggedBLogUser', JSON.stringify(user))
      setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
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

  const handleRemove = async id => {
    const blog = blogs.find(blog => blog.id === id)
    const result = window.confirm(`Remove ${blog.title}! by ${blog.author}`)
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

  return (
    <div>
      <Notification message={sucessMessage} style={sucessStyle} />
      <Notification message={errorMessage} style={errorStyle} />
      {user === null ? (
        <LoginForm
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleLogin={handleLogin}
          username={username}
          password={password}
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
      )}

      <BlogList
        blogs={blogs}
        handleLike={handleLike}
        handleRemove={handleRemove}
        user={user}
      />
    </div>
  )
}

export default App
